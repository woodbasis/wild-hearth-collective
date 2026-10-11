import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Staff — Who is at the bench | Riven Wood" },
      {
        name: "description",
        content:
          "Who handles carving, finishing, orders and shipping at the Riven Wood workshop, and how to reach each part of it.",
      },
      { property: "og:title", content: "Staff — Riven Wood" },
      {
        property: "og:description",
        content: "The bench, the yard and the post — who does what, and when.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StaffPage,
});

function StaffPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="Staff"
      lead="A small shop, so the honest answer is that most letters come back from whoever last held a knife. Here is how the work is divided."
    >
      <InfoSection heading="The bench">
        <p>
          Riving, axe work, hook knife and finishing all sit with the carvers. They set the
          lead times, because nothing is promised that a green log has not already agreed to.
        </p>
      </InfoSection>
      <InfoSection heading="The yard and the post">
        <p>
          One person keeps the wood pile, the drying shelves and the packing table, and answers
          questions about shipping, customs and the state of your parcel. Write to that person
          if a parcel has gone quiet.
        </p>
      </InfoSection>
      <InfoSection heading="Visiting">
        <p>
          The door is open by arrangement rather than by opening hours — the bench stops when
          someone comes to see it. Say when you would like to come and we will tell you honestly
          whether there is room.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
