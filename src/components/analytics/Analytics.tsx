const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

import { useCookieConsent } from "@/components/privacy/CookieConsent";

export default function Analytics() {
  const { consent } = useCookieConsent();
  const allowAnalytics = consent?.analytics === true;
  if (!allowAnalytics) return null;

  return (
    <>
      {PLAUSIBLE_DOMAIN ? (
        <script defer data-domain={PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />
      ) : null}

      {GA_MEASUREMENT_ID ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `,
            }}
          />
        </>
      ) : null}
    </>
  );
}
