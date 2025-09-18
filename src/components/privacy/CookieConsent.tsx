import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie_consent";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
};

type CookieConsentContextValue = {
  consent: Consent | null;
  setConsent: (value: Consent) => void;
  openPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setConsentState(JSON.parse(raw));
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const setConsent = (value: Consent) => {
    setConsentState(value);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      // ignore write errors
    }
  };

  const value = useMemo(
    () => ({
      consent,
      setConsent,
      openPreferences: () => setShowPrefs(true),
    }),
    [consent],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {showBanner && !consent ? (
        <Banner
          onAcceptAll={() => {
            setConsent({
              necessary: true,
              analytics: true,
              marketing: true,
              date: new Date().toISOString(),
            });
            setShowBanner(false);
          }}
          onReject={() => {
            setConsent({
              necessary: true,
              analytics: false,
              marketing: false,
              date: new Date().toISOString(),
            });
            setShowBanner(false);
          }}
          onPreferences={() => setShowPrefs(true)}
        />
      ) : null}
      {showPrefs ? (
        <Preferences
          consent={consent}
          onSave={(c) => {
            setConsent({ ...c, necessary: true, date: new Date().toISOString() });
            setShowPrefs(false);
            setShowBanner(false);
          }}
          onClose={() => setShowPrefs(false)}
        />
      ) : null}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}

function Banner({
  onAcceptAll,
  onReject,
  onPreferences,
}: {
  onAcceptAll: () => void;
  onReject: () => void;
  onPreferences: () => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 p-4">
        <div className="text-sm text-muted-foreground">
          We use cookies to operate our site and, with your consent, for analytics. You can change
          your preferences anytime.
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onPreferences}>
            Preferences
          </Button>
          <Button variant="secondary" onClick={onReject}>
            Reject non‑essential
          </Button>
          <Button variant="destructive" onClick={onAcceptAll}>
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}

function Preferences({
  consent,
  onSave,
  onClose,
}: {
  consent: Consent | null;
  onSave: (c: Omit<Consent, "necessary" | "date">) => void;
  onClose: () => void;
}) {
  const [analytics, setAnalytics] = useState<boolean>(consent?.analytics ?? false);
  const [marketing, setMarketing] = useState<boolean>(consent?.marketing ?? false);
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-md border bg-background p-6 shadow-xl">
        <h2 className="mb-2 text-xl font-semibold">Cookie preferences</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Manage your choices. Necessary cookies are always on.
        </p>
        <div className="space-y-4">
          <label className="flex items-start gap-3">
            <input type="checkbox" checked readOnly className="mt-1" />
            <span>
              <strong>Necessary</strong>
              <div className="text-xs text-muted-foreground">
                Required to operate the site and provide core functionality.
              </div>
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1"
            />
            <span>
              <strong>Analytics</strong>
              <div className="text-xs text-muted-foreground">
                Help us understand usage to improve the experience.
              </div>
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="mt-1"
            />
            <span>
              <strong>Marketing</strong>
              <div className="text-xs text-muted-foreground">
                Used for marketing communications and measurement.
              </div>
            </span>
          </label>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onSave({ analytics, marketing })}>Save preferences</Button>
        </div>
      </div>
    </div>
  );
}
