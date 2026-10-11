import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — How orders are handled | Riven Wood" },
      {
        name: "description",
        content:
          "How payments, card details and delivery addresses are handled and protected when you order from Riven Wood.",
      },
      { property: "og:title", content: "Security — Riven Wood" },
      {
        property: "og:description",
        content: "Card details stay with the payment provider; we keep only what a parcel needs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <InfoPage
      eyebrow="Resources"
      title="Security"
      lead="A short account of what happens between your card and the parcel, and what we never see."
    >
      <InfoSection heading="Payments">
        <p>
          Payment is taken by a dedicated payment provider over an encrypted connection. Card
          numbers are handled by them, not by us — no card details are ever stored on our side,
          in a file or in the order notes.
        </p>
      </InfoSection>
      <InfoSection heading="Your delivery details">
        <p>
          We keep your name, delivery address and email for as long as the order and its
          warranty need them. That is the whole list. Nothing is passed to anyone except the
          carrier that delivers it.
        </p>
      </InfoSection>
      <InfoSection heading="Report a problem">
        <p>
          If a payment page ever asks for something that looks odd, or a message arrives claiming
          to be us and asking for a password or card number, stop and write to us from the contact
          page so we can check it and warn the next person.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
