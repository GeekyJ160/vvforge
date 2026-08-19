import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">Aura</p>
      <h1 className="mt-3 font-display text-4xl font-medium">Sign in</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        Same people. Same frequency. Google or X — nothing else.
      </p>
      <div className="mt-8 flex flex-col gap-3">
        {authEnabled ? (
          GROK_PROVIDERS.map((p) => (
            <Button
              key={p.providerId}
              size="lg"
              variant={p.idp === "google" ? "primary" : "outline"}
              className="w-full"
              onClick={() => void signIn(p.providerId, { callbackURL: "/" })}
            >
              Continue with {p.label}
            </Button>
          ))
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
      </div>
      <Link to="/" className="mt-8 text-sm text-muted underline-offset-4 hover:text-fg hover:underline">
        Back
      </Link>
    </main>
  );
}
