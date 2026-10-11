import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, InfoSection } from "@/components/InfoPage";

export const Route = createFileRoute("/charts")({
  head: () => ({
    meta: [
      { title: "Charts — Working notes on five woods | Riven Wood" },
      {
        name: "description",
        content:
          "Working charts for the woods we carve most: cherry, oak, walnut, maple and plum — how each rives, moves and ages.",
      },
      { property: "og:title", content: "Charts — Working notes on five woods" },
      {
        property: "og:description",
        content: "How cherry, oak, walnut, maple and plum behave under the axe and in the kitchen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChartsPage,
});

const woods = [
  {
    name: "Cherry",
    rives: "Straight and quiet, with the rare whisper of a false grain.",
    moves: "Moves little once dry; a dependable first bowl.",
    ages: "Deepens from pale pink to a warm reddish brown in a year of use.",
  },
  {
    name: "Oak",
    rives: "Bold and open — you can hear the fibres part.",
    moves: "Strong ring-porous grain; needs slow drying or it checks.",
    ages: "Tans to honey, and the medullary rays catch the light.",
  },
  {
    name: "Walnut",
    rives: "Cooperative, with a soft earlywood that takes a fine edge.",
    moves: "Steady in service; a good choice for long handles.",
    ages: "Holds its chocolate heartwood, with the sapline staying pale.",
  },
  {
    name: "Maple",
    rives: "The stubborn one — dense and even, it resists the wedge.",
    moves: "Very little, which is why it earns the eating spoons.",
    ages: "Browns gently, and the grain turns glassy with oil.",
  },
  {
    name: "Plum",
    rives: "Wild and figure-heavy; the crook of a branch makes the spoon.",
    moves: "Twists as it dries, so blanks are roughed early and left.",
    ages: "Warms to amber and shows every ripple in the finish.",
  },
];

function ChartsPage() {
  return (
    <InfoPage
      eyebrow="Resources"
      title="Charts"
      lead="Working notes for the five woods on the bench, kept the way a bench note is kept: what the wood does, not what a catalogue claims."
    >
      {woods.map((w) => (
        <InfoSection key={w.name} heading={w.name}>
          <p>
            <span className="text-[11px] uppercase tracking-[0.18em] text-secondary">Riving</span>
            <br />
            {w.rives}
          </p>
          <p>
            <span className="text-[11px] uppercase tracking-[0.18em] text-secondary">Movement</span>
            <br />
            {w.moves}
          </p>
          <p>
            <span className="text-[11px] uppercase tracking-[0.18em] text-secondary">In use</span>
            <br />
            {w.ages}
          </p>
        </InfoSection>
      ))}
    </InfoPage>
  );
}
