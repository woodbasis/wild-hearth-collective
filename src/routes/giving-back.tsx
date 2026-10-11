import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/giving-back")({
  head: () => ({
    meta: [
      { title: "Giving back — Where the offcuts go | Riven Wood" },
      {
        name: "description",
        content:
          "How offcuts, shavings and a share of each sale go back into woodland, tools and local teaching.",
      },
      { property: "og:title", content: "Giving back — Riven Wood" },
      {
        property: "og:description",
        content: "Offcuts to the firebox, shavings to the garden, and a share of each sale back to the woods.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GivingBackPage,
});

function GivingBackPage() {
  return (
    <InfoPage
      eyebrow="Discover"
      title="Giving back"
      lead="A riven spoon uses a small part of a tree, so the rest has to earn its keep. This is where the remainder of every log goes."
    >
      <InfoSection heading="Offcuts and shavings">
        <p>
          Ends and offcuts feed the workshop stove. Shavings and fine dust go to the garden beds
          and the compost, never the bin. Anything too thin to carve becomes kindling; anything
          too knotty to carve becomes a handle blank for somebody starting out.
        </p>
      </InfoSection>
      <InfoSection heading="A share of each sale">
        <p>
          A share of what we take in goes to woodland work — planting and clearing the stands
          where our windfall and coppice wood comes from. We will tell you which group we support
          once the amount is worth naming; we would rather state a fact than a nice round figure.
        </p>
      </InfoSection>
      <InfoSection heading="Teaching">
        <p>
          Bench time is set aside for people learning to rive and carve, at no charge, using
          workshop tools and workshop offcuts. If you would like a place, ask on the contact page
          and we will fit you in when the bench allows.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
