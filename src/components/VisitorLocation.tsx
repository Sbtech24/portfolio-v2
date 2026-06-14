"use client";

import { useEffect, useState } from "react";

type VisitorLocation = {
  city?: string;
  region?: string;
  country_name?: string;
};

type StoredLocation = VisitorLocation & {
  timestamp: number;
};

const STORAGE_KEY = "visitorLocation";

export default function VisitorLocation() {
  const [currentLocation, setCurrentLocation] = useState<VisitorLocation | null>(null);
  const [lastLocation, setLastLocation] = useState<StoredLocation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setLastLocation(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    fetch("https://ipapi.co/json/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch location");
        }
        return response.json();
      })
      .then((data) => {
        const location: VisitorLocation = {
          city: data.city,
          region: data.region,
          country_name: data.country_name,
        };
        setCurrentLocation(location);
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            ...location,
            timestamp: Date.now(),
          })
        );
      })
      .catch(() => {
        setError("Unable to detect your location right now.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formatLocation = (location: VisitorLocation | null) => {
    if (!location) return "Unknown";
    const parts = [ location.region, location.country_name].filter(Boolean);
    return parts.length > 0 ? parts.join(", ") : "Unknown";
  };

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-lg shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-950/80 dark:shadow-black/20">
      <h2 className="text-xl font-semibold mb-3">Visitor Location</h2>
      {/* <p className="text-sm text-zinc-500 mb-4">
        This section detects your current location country and remembers your last visit location.
      </p> */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Current location</p>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.35)] animate-pulse" />
          </div>
          <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {loading ? "Detecting..." : error ? "Unavailable" : formatLocation(currentLocation)}
          </p>
          <p className="text-sm text-zinc-500 mt-1">
            {error ? error : "Country is detected automatically for visitors."}
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Last known location</p>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.35)] animate-pulse" />
          </div>
          <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {lastLocation ? formatLocation(lastLocation) : "No previous location found."}
          </p>
          {lastLocation && (
            <p className="text-sm text-zinc-500 mt-1">
              Last visit: {new Date(lastLocation.timestamp).toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
