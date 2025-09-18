import { useEffect, useRef } from "react";

export function usePrefetchOnView<T extends HTMLElement>(prefetch: () => void) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    let done = false;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!done && entry.isIntersecting) {
            done = true;
            prefetch();
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [prefetch]);

  return ref;
}
