import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getPerson, swipe } from "@/lib/aura-api";
import type { DiscoverCard } from "@/lib/aura";
import { Button } from "@/components/ui/button";
import { ProfileView } from "@/components/profile-view";

export const Route = createFileRoute("/_app/people/$userId")({ component: PersonPage });

function PersonPage() {
  const { userId } = Route.useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState<DiscoverCard | null | undefined>(undefined);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void getPerson({ data: userId })
      .then(setPerson)
      .catch(() => setPerson(null));
  }, [userId]);

  if (person === undefined) {
    return <div className="m-5 h-96 animate-pulse rounded-xl bg-elevated" />;
  }
  if (!person) {
    return (
      <div className="px-5 pt-16 text-center">
        <p className="font-display text-2xl">This person is ghosting the room</p>
        <Link to="/discover" className="mt-4 inline-block text-sm text-muted underline">
          Discover
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 pb-8">
      <button
        type="button"
        className="mb-3 text-xs uppercase tracking-[0.16em] text-muted"
        onClick={() => window.history.back()}
      >
        Back
      </button>
      <ProfileView person={person} />
      <div className="mt-6 flex gap-3">
        <Button
          className="flex-1"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              const result = await swipe({ data: { toUserId: person.userId, action: "spark" } });
              if (result.matched) {
                await navigate({ to: "/chat/$chatId", params: { chatId: result.chatId } });
              }
            } finally {
              setBusy(false);
            }
          }}
        >
          Spark
        </Button>
      </div>
    </div>
  );
}
