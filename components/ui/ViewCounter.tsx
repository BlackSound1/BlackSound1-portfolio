"use client";

import { ReactElement, useEffect, useState } from "react";

/**
 * Query Abacus to count how many times the site has been visited and display the value.
 * @returns The View Counter.
 */
export default function ViewCounter(): ReactElement {
  const [count, setCount] = useState("Fetching...");

  useEffect(() => {
    const abortController = new AbortController();

    /**
     * Query Abacus to get the page view count.
     */
    const trackHit = async () => {
      try {
        if (process.env.NEXT_PUBLIC_ENV === "prod") {
          const URL = "https://abacus.jasoncameron.dev/hit/blacksound1-portfolio.vercel.app/visits";
          const resp = await fetch(URL, { signal: abortController.signal });
          const data = await resp.json();
          setCount(data.value);
        } else {
          setCount("dev mode");
        }
      } catch (error) {
        // Ignore abort errors
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        console.error("Failed to fetch view count: ", error);
        setCount("Cannot fetch!");
      }
    };

    trackHit();

    return () => abortController.abort();
  }, []);

  return (
    <div id="view-counter" data-testid="view-counter">
      <span className="hover:text-accent transition-colors duration-200">{count}</span> <span>views</span>
    </div>
  );
}
