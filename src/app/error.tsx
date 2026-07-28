"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with your error reporting service.
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <p className="text-foreground/70">
        An unexpected error occurred. Try again, and if the problem persists
        contact support.
      </p>
      <button
        type="button"
        onClick={reset}
        className="border-foreground/20 hover:bg-foreground/5 w-fit rounded-md border px-4 py-2 text-sm"
      >
        Try again
      </button>
    </main>
  );
}
