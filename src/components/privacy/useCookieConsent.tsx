import React, { createContext, useContext } from "react";

export const STORAGE_KEY = "cookie_consent";

export type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
};

export type CookieConsentContextValue = {
  consent: Consent | null;
  setConsent: (value: Consent) => void;
  openPreferences: () => void;
};

export const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}
