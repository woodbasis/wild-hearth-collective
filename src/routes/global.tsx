import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/global")({
  head: () => ({
    meta: [
      { title: "Global — Where parcels travel | Riven Wood" },
      {
        name: "description",
        content:
          "Shipping destinations, how hand-carved wooden pieces are packed, and how customs duties are handled.",
      },
      { property: "og:title", content: "Global — Riven Wood" },
      {
        property: "og:description",
        content: "Where the parcels go, how they are packed, and what customs may ask of you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GlobalPage,
});

function GlobalPage() {
  return (
    <InfoPage
      eyebrow="Resources"
      title="Global"
      lead="Wood travels badly if it is hurried, so the packing matters more than the postage. Here is where parcels go and how they are prepared."
    >
      <InfoSection heading="Where we ship">
        <p>
          Orders leave the workshop to addresses at home and abroad. Where a destination is one
          we cannot reach reliably, we say so before you order rather than after.
        </p>
      </InfoSection>
      <InfoSection heading="How pieces are packed">
        <p>
          Each piece is wrapped so it cannot knock against its own box, then boxed with the
          board or bowl sitting flat. Nothing ships green: everything has dried enough to be
          considered stable before it is allowed a label.
        </p>
      </InfoSection>
      <InfoSection heading="Duties and customs">
        <p>
          Outside the home country's customs union, import duty and handling fees can be charged
          on arrival, and those are the buyer's responsibility. We declare contents honestly and
          tell you the likely cost before the parcel leaves, so there are no surprises at the door.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
