import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Bench time and apprenticeships | Riven Wood" },
      {
        name: "description",
        content:
          "How apprenticeships and bench time work at Riven Wood, what we look for, and how to apply.",
      },
      { property: "og:title", content: "Careers — Riven Wood" },
      {
        property: "og:description",
        content: "One apprentice at a time, taught from the log up rather than the pattern down.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="Careers"
      lead="We take on one apprentice at a time, because a shared bench teaches nothing. If you want to learn to rive and carve, this is how it works."
    >
      <InfoSection heading="What we look for">
        <p>
          Patience with a log that refuses, and a willingness to be told the grain was wrong.
          Prior carving is not required; the ability to stand at a bench for a day and keep your
          edge safe is.
        </p>
      </InfoSection>
      <InfoSection heading="How the year runs">
        <p>
          Winter is riving and roughing — the cold months suit green wood. Spring and summer are
          carving, finishing and packing. You start with wedges, shavings and the firebox, and
          move to the hook knife when the axe is honest.
        </p>
      </InfoSection>
      <InfoSection heading="How to apply">
        <p>
          Send a short note through the contact page telling us what you have made with your
          hands, and what you would like to be able to make. A photo of anything — a shelf, a
          spoon, a repaired chair — says more than a CV.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
