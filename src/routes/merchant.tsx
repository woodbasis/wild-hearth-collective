import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/merchant")({
  head: () => ({
    meta: [
      { title: "Merchant — Stocking Riven Wood | Riven Wood" },
      {
        name: "description",
        content:
          "Wholesale and stockist information for shops and galleries that want to carry hand-riven wooden utensils.",
      },
      { property: "og:title", content: "Merchant — Stocking Riven Wood" },
      {
        property: "og:description",
        content: "Short runs, honest lead times and a small number of stockists.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MerchantPage,
});

function MerchantPage() {
  return (
    <InfoPage
      eyebrow="Discover"
      title="Merchant"
      lead="We work in short runs from one bench, so we keep our stockists few and close enough to visit. If you would like to carry the work, here is how it goes."
    >
      <InfoSection heading="What we offer">
        <p>
          Wholesale trays of spoons, spatulas, bowls and boards in mixed sizes and woods —
          cherry, oak, walnut, maple and plum. Pieces arrive unfinished-to-satin, depending
          on the order, and each one is marked with the wood it came from.
        </p>
        <p>
          Because everything is riven rather than sawn, no two pieces in a tray are identical.
          We send a photo of the actual tray before it ships so you know what is coming.
        </p>
      </InfoSection>
      <InfoSection heading="What we ask">
        <p>
          That the pieces are shown as work, not decoration: away from direct sun and standing
          water, and credited as hand-riven when they are described. We are happy to supply the
          short story that goes with them.
        </p>
      </InfoSection>
      <InfoSection heading="Getting started">
        <p>
          Tell us roughly what you sell and how many pieces you would want on the shelf. We
          will come back with what the bench can commit to, and a lead time before anything is
          ordered. Write to us from the contact page.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
