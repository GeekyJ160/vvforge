import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { signOut } from "@/lib/auth/client";
import { useCurrentUser } from "@/lib/auth/use-current-user";
import { getMyProfile, updateSafety } from "@/lib/aura-api";
import { VISIBILITY, type Profile, type Visibility } from "@/lib/aura";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProfileView } from "@/components/profile-view";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/me")({ component: MePage });

function MePage() {
  const user = useCurrentUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [visibility, setVisibility] = useState<Visibility>("open");
  const [trusted, setTrusted] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    void getMyProfile().then((p) => {
      if (!p) return;
      setProfile(p);
      setVisibility(p.visibility);
      setTrusted(p.trustedContact);
    });
  }, []);

  if (!profile) {
    return <div className="m-5 h-96 animate-pulse rounded-xl bg-elevated" />;
  }

  return (
    <div className="px-4 pt-4 pb-10">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">You</p>
          <h1 className="font-display text-3xl font-medium">Your signal</h1>
        </div>
        <Link to="/onboard" className="text-sm text-muted underline-offset-4 hover:underline">
          Edit
        </Link>
      </div>

      <ProfileView person={profile} />

      <section className="mt-8 rounded-xl border border-border bg-surface px-4 py-5">
        <h2 className="font-display text-xl">Safety</h2>
        <p className="mt-1 text-sm text-muted">
          Neighborhood only. Never a pin. Ghost whenever you need the room to go dark.
        </p>
        <div className="mt-4 grid gap-2">
          {VISIBILITY.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVisibility(v.id)}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-left",
                visibility === v.id
                  ? "border-border-strong bg-elevated"
                  : "border-border",
              )}
            >
              <p className="text-sm font-medium">{v.label}</p>
              <p className="text-xs text-muted">{v.hint}</p>
            </button>
          ))}
        </div>
        <label className="mt-4 flex flex-col gap-1.5">
          <Label>Trusted contact</Label>
          <Input
            value={trusted}
            onChange={(e) => setTrusted(e.target.value)}
            placeholder="Someone who would pick up"
          />
        </label>
        <Button
          className="mt-4"
          variant="outline"
          onClick={async () => {
            const next = await updateSafety({
              data: { visibility, trustedContact: trusted },
            });
            if (next) setProfile(next);
            setSaved(true);
            window.setTimeout(() => setSaved(false), 1600);
          }}
        >
          {saved ? "Saved" : "Save safety"}
        </Button>
      </section>

      <div className="mt-8 flex items-center justify-between text-sm text-muted">
        <span>{user?.primaryEmail}</span>
        <button type="button" className="underline-offset-4 hover:underline" onClick={() => void signOut("/")}>
          Sign out
        </button>
      </div>
    </div>
  );
}
