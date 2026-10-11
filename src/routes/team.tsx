import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — The hands behind the work | Riven Wood" },
      {
        name: "description",
        content:
          "The people behind Riven Wood, described by their trade rather than their title: riving, carving, edge work and packing.",
      },
      { property: "og:title", content: "Team — Riven Wood" },
      {
        property: "og:description",
        content: "Riving, carving, edge work, oil and packing — the trades that make up the workshop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="Team"
      lead="Everyone here is defined by a trade, not a job title. These are the trades a piece passes through on its way to your kitchen."
    >
      <InfoSection heading="Riving">
        <p>
          The people who read the log and open it with wedges. This is the step that decides
          everything downstream, and it is never rushed to meet a delivery date.
        </p>
      </InfoSection>
      <InfoSection heading="Carving and edge work">
        <p>
          Axe, hook knife and sloyd knife. The same person usually takes a piece from roughed
          blank to finished curve, so the shape stays one thought rather than three corrections.
          Sharpening is its own discipline and is treated as such.
        </p>
      </InfoSection>
      <InfoSection heading="Finish, oil and packing">
        <p>
          Drying is watched for weeks, not hours. Before a piece is boxed it is checked for
          movement, rubbed with food-safe oil, and wrapped so it arrives as it left the bench.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
