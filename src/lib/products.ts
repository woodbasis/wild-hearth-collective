import spoonCrook from "@/assets/products/spoon-crook.jpg";
import spoonLadle from "@/assets/products/spoon-ladle.jpg";
import spoonEater from "@/assets/products/spoon-eater.jpg";
import spoonServer from "@/assets/products/spoon-server.jpg";
import spoonCoffee from "@/assets/products/spoon-coffee.jpg";
import spoonTasting from "@/assets/products/spoon-tasting.jpg";
import spoonPorridge from "@/assets/products/spoon-porridge.jpg";
import spoonLongstir from "@/assets/products/spoon-longstir.jpg";
import spoonScoop from "@/assets/products/spoon-scoop.jpg";
import spoonPocket from "@/assets/products/spoon-pocket.jpg";
import spatulaSweep from "@/assets/products/spatula-sweep.jpg";
import spatulaFlip from "@/assets/products/spatula-flip.jpg";
import spatulaPanedge from "@/assets/products/spatula-panedge.jpg";
import spatulaStirrer from "@/assets/products/spatula-stirrer.jpg";
import spatulaButter from "@/assets/products/spatula-butter.jpg";
import spatulaGrill from "@/assets/products/spatula-grill.jpg";
import spatulaNarrow from "@/assets/products/spatula-narrow.jpg";
import spatulaOffset from "@/assets/products/spatula-offset.jpg";
import spatulaBroad from "@/assets/products/spatula-broad.jpg";
import spatulaCurved from "@/assets/products/spatula-curved.jpg";
import bowlTurned from "@/assets/products/bowl-turned.jpg";
import bowlServing from "@/assets/products/bowl-serving.jpg";
import bowlBreakfast from "@/assets/products/bowl-breakfast.jpg";
import bowlDeep from "@/assets/products/bowl-deep.jpg";
import bowlShallow from "@/assets/products/bowl-shallow.jpg";
import bowlNesting from "@/assets/products/bowl-nesting.jpg";
import bowlDough from "@/assets/products/bowl-dough.jpg";
import bowlSnack from "@/assets/products/bowl-snack.jpg";
import bowlPouring from "@/assets/products/bowl-pouring.jpg";
import bowlFooted from "@/assets/products/bowl-footed.jpg";
import boardCleaved from "@/assets/products/board-cleaved.jpg";
import boardButcher from "@/assets/products/board-butcher.jpg";
import boardServing from "@/assets/products/board-serving.jpg";
import boardBread from "@/assets/products/board-bread.jpg";
import boardRound from "@/assets/products/board-round.jpg";
import boardPaddle from "@/assets/products/board-paddle.jpg";
import boardEveryday from "@/assets/products/board-everyday.jpg";
import boardFeast from "@/assets/products/board-feast.jpg";
import boardSmall from "@/assets/products/board-small.jpg";
import boardBarkedge from "@/assets/products/board-barkedge.jpg";

export type Product = {
  name: string;
  category: "Spoons" | "Spatulas" | "Bowls" | "Boards";
  material: string;
  price: string;
  image: string;
  alt: string;
  note: string;
  featured?: boolean;
};

export const products: Product[] = [
  // ---- Spoons ----
  { name: "Spoon — Crook", category: "Spoons", material: "Riven cherry", price: "$38", image: spoonCrook, alt: "Hand-carved cherry spoon with a natural crook in the handle", note: "Carved from the bend of a cherry branch, the grain sweeps unbroken into the bowl.", featured: true },
  { name: "Spoon — Ladle", category: "Spoons", material: "Riven walnut", price: "$44", image: spoonLadle, alt: "Deep-bowled walnut ladle with a long curved handle", note: "A deep bowl for soups and stews, dark with walnut grain." },
  { name: "Spoon — Eater", category: "Spoons", material: "Riven maple", price: "$34", image: spoonEater, alt: "Small pale maple eating spoon", note: "Sized for the table, with a slim handle that follows the branch." },
  { name: "Spoon — Server", category: "Spoons", material: "Riven oak", price: "$40", image: spoonServer, alt: "Long-handled oak serving spoon", note: "A long handle and broad bowl for serving at the table." },
  { name: "Spoon — Coffee", category: "Spoons", material: "Riven walnut", price: "$28", image: spoonCoffee, alt: "Small walnut coffee scoop spoon", note: "A small scoop for coffee and spices, dark with walnut grain." },
  { name: "Spoon — Tasting", category: "Spoons", material: "Riven cherry", price: "$26", image: spoonTasting, alt: "Small cherry tasting spoon", note: "A cook's tasting spoon, light in the hand and quick to clean." },
  { name: "Spoon — Porridge", category: "Spoons", material: "Riven maple", price: "$32", image: spoonPorridge, alt: "Maple porridge spoon with round bowl", note: "A round-bowled spoon made for slow breakfasts." },
  { name: "Spoon — Long Stir", category: "Spoons", material: "Riven oak", price: "$42", image: spoonLongstir, alt: "Long oak stirring spoon with an S-curve handle", note: "Reaches the bottom of the deepest pot without burning knuckles." },
  { name: "Spoon — Scoop", category: "Spoons", material: "Riven maple", price: "$36", image: spoonScoop, alt: "Wide shallow maple scoop spoon", note: "A wide, shallow scoop for flour, grains and dried goods." },
  { name: "Spoon — Pocket", category: "Spoons", material: "Riven plum", price: "$30", image: spoonPocket, alt: "Small reddish plum wood pocket spoon", note: "A small travel spoon that rides easily in a pocket or pack." },

  // ---- Spatulas ----
  { name: "Spatula — Sweep", category: "Spatulas", material: "Riven cherry", price: "$32", image: spatulaSweep, alt: "Hand-carved cherry spatula with a thin swept blade", note: "A thin, flexible blade that stays strong because no fibre was cut.", featured: true },
  { name: "Spatula — Flip", category: "Spatulas", material: "Riven maple", price: "$34", image: spatulaFlip, alt: "Wide maple flipping spatula", note: "A wide blade that slides under pancakes and fish without tearing." },
  { name: "Spatula — Pan Edge", category: "Spatulas", material: "Riven walnut", price: "$30", image: spatulaPanedge, alt: "Angled walnut pan-edge spatula", note: "Cut at an angle to follow the curve of a cast iron pan." },
  { name: "Spatula — Stirrer", category: "Spatulas", material: "Riven oak", price: "$28", image: spatulaStirrer, alt: "Flat oak stirring spatula", note: "A flat stirrer that scrapes the pot clean as it turns." },
  { name: "Spatula — Butter", category: "Spatulas", material: "Riven maple", price: "$24", image: spatulaButter, alt: "Small maple butter spreader", note: "A small spreader for butter, soft cheese and jam." },
  { name: "Spatula — Grill", category: "Spatulas", material: "Riven oak", price: "$38", image: spatulaGrill, alt: "Heavy oak grill spatula", note: "A heavy blade for the grill, split from dense old oak." },
  { name: "Spatula — Narrow", category: "Spatulas", material: "Riven cherry", price: "$26", image: spatulaNarrow, alt: "Narrow cherry spatula for jars", note: "Slim enough to slip into jars and along the sides of bowls." },
  { name: "Spatula — Offset", category: "Spatulas", material: "Riven walnut", price: "$36", image: spatulaOffset, alt: "Offset walnut spatula with a bent handle", note: "An offset handle keeps your hand clear of the pan's heat." },
  { name: "Spatula — Broad", category: "Spatulas", material: "Riven maple", price: "$34", image: spatulaBroad, alt: "Broad maple spatula", note: "A broad blade for turning large cuts and lifting bakes." },
  { name: "Spatula — Curved", category: "Spatulas", material: "Riven plum", price: "$32", image: spatulaCurved, alt: "Curved plum wood spatula following the grain", note: "The curve came from the tree — the grain runs unbroken along it." },

  // ---- Bowls ----
  { name: "Bowl — Turned", category: "Bowls", material: "Riven oak", price: "$74", image: bowlTurned, alt: "Hand-turned oak bowl with visible grain", note: "Turned from old oak, finished with food-safe oil.", featured: true },
  { name: "Bowl — Serving", category: "Bowls", material: "Riven maple", price: "$88", image: bowlServing, alt: "Large pale maple serving bowl", note: "A large bowl for salads and sharing, light despite its size." },
  { name: "Bowl — Breakfast", category: "Bowls", material: "Riven cherry", price: "$52", image: bowlBreakfast, alt: "Small cherry breakfast bowl", note: "Sized for porridge and yoghurt, warm in the hands." },
  { name: "Bowl — Deep", category: "Bowls", material: "Riven walnut", price: "$68", image: bowlDeep, alt: "Deep dark walnut bowl", note: "Deep sides for soups, stews and generous helpings." },
  { name: "Bowl — Shallow", category: "Bowls", material: "Riven maple", price: "$58", image: bowlShallow, alt: "Shallow wide maple bowl", note: "A shallow form for pasta, salads and bread." },
  { name: "Bowl — Nesting Pair", category: "Bowls", material: "Riven cherry", price: "$96", image: bowlNesting, alt: "Pair of nesting cherry bowls", note: "Two bowls that nest together, split from the same log." },
  { name: "Bowl — Dough", category: "Bowls", material: "Riven oak", price: "$110", image: bowlDough, alt: "Large oak dough bowl", note: "A heavy bowl for kneading and proving bread dough." },
  { name: "Bowl — Snack", category: "Bowls", material: "Riven walnut", price: "$44", image: bowlSnack, alt: "Small walnut snack bowl with almonds", note: "A small bowl for nuts, olives and berries." },
  { name: "Bowl — Pouring", category: "Bowls", material: "Riven cherry", price: "$72", image: bowlPouring, alt: "Cherry bowl with a pouring lip", note: "A pulled lip pours batter and sauces without drips." },
  { name: "Bowl — Footed", category: "Bowls", material: "Riven plum", price: "$84", image: bowlFooted, alt: "Footed plum wood bowl", note: "A raised foot lifts the bowl and shows the grain below." },

  // ---- Boards ----
  { name: "Board — Cleaved", category: "Boards", material: "Riven oak", price: "$56", image: boardCleaved, alt: "Oak chopping board with a natural bark edge", note: "Split along the log, it stays flat and keeps its natural bark edge.", featured: true },
  { name: "Board — Butcher", category: "Boards", material: "Riven oak", price: "$92", image: boardButcher, alt: "Thick oak butcher's block", note: "A thick, heavy board that takes decades of chopping." },
  { name: "Board — Serving", category: "Boards", material: "Riven walnut", price: "$64", image: boardServing, alt: "Dark walnut serving board with a live edge", note: "Dark walnut with a live edge, made for cheese and bread." },
  { name: "Board — Bread", category: "Boards", material: "Riven maple", price: "$48", image: boardBread, alt: "Long maple bread board with a handle", note: "Long enough for a full loaf, with a handle carved from the same piece." },
  { name: "Board — Round", category: "Boards", material: "Riven cherry", price: "$58", image: boardRound, alt: "Round cherry chopping board showing tree rings", note: "A round board that shows the tree's rings at its centre." },
  { name: "Board — Paddle", category: "Boards", material: "Riven maple", price: "$52", image: boardPaddle, alt: "Paddle-shaped maple serving board", note: "A paddle shape for serving, hanging by its handle when not in use." },
  { name: "Board — Everyday", category: "Boards", material: "Riven oak", price: "$44", image: boardEveryday, alt: "Everyday oak chopping board", note: "The daily board — light, flat and kind to knife edges." },
  { name: "Board — Feast", category: "Boards", material: "Riven walnut", price: "$120", image: boardFeast, alt: "Extra-large walnut feasting board", note: "An extra-large board for roasts, feasts and long tables." },
  { name: "Board — Small", category: "Boards", material: "Riven plum", price: "$36", image: boardSmall, alt: "Small plum wood board with plum fruit", note: "A small board for fruit, herbs and a quick slice of cheese." },
  { name: "Board — Bark Edge", category: "Boards", material: "Riven cherry", price: "$62", image: boardBarkedge, alt: "Cherry board with natural bark edge", note: "The bark edge is left on — a line of the tree on your table." },
];
