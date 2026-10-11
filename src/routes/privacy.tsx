import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — What we keep and why | Riven Wood" },
      {
        name: "description",
        content:
          "A plain-language summary of the personal details Riven Wood keeps, why they are kept, and how to have them removed.",
      },
      { property: "og:title", content: "Privacy — Riven Wood" },
      {
        property: "og:description",
        content: "We keep only what a parcel needs, sell nothing, and delete on request.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Resources"
      title="Privacy"
      lead="A plain-language summary of what the workshop keeps about you. It is short because there is little to tell."
    >
      <InfoSection heading="What we collect">
        <p>
          The name, delivery address and email address you give us when you order, plus the
          message you sent when you asked about a piece. Payment details are held by the payment
          provider and never reach us.
        </p>
      </InfoSection>
      <InfoSection heading="Why we keep it">
        <p>
          To deliver the parcel, to answer if it goes wrong, and to tell you when a new run of
          spoons is ready — the last of these only if you asked for it. We do not sell or pass on
          your details to anyone except the carrier delivering your order.
        </p>
      </InfoSection>
      <InfoSection heading="Your choices">
        <p>
          Ask us from the contact page and we will show you what we hold, correct it, or delete
          it. If you no longer want to hear from us, say so once and that is the end of it.
        </p>
      </InfoSection>
      <InfoSection heading="A note">
        <p>
          This is a plain-language summary written for readers, not a legal policy drawn up by a
          lawyer. Before the shop takes live orders, it should be checked against the rules that
          apply where you are registered.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
