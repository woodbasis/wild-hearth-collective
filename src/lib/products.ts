import spoonImage from "@/assets/product-spoon.jpg";
import spatulaImage from "@/assets/product-spatula.jpg";
import bowlImage from "@/assets/product-bowl.jpg";
import boardImage from "@/assets/product-board.jpg";

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
  { name: "Spoon — Crook", category: "Spoons", material: "Riven cherry", price: "$38", image: spoonImage, alt: "Hand-carved riven cherry spoon with a natural crook in the handle", note: "Carved from the bend of a cherry branch, the grain sweeps unbroken into the bowl.", featured: true },
  { name: "Spoon — Ladle", category: "Spoons", material: "Riven birch", price: "$44", image: spoonImage, alt: "Deep-bowled riven birch ladle", note: "A deep bowl for soups and stews, split from a straight birch billet." },
  { name: "Spoon — Eater", category: "Spoons", material: "Riven apple", price: "$34", image: spoonImage, alt: "Small riven apple eating spoon", note: "Sized for the table, with a slim handle that follows the branch." },
  { name: "Spoon — Server", category: "Spoons", material: "Riven beech", price: "$40", image: spoonImage, alt: "Long-handled riven beech serving spoon", note: "A long handle and broad bowl for serving at the table." },
  { name: "Spoon — Coffee", category: "Spoons", material: "Riven walnut", price: "$28", image: spoonImage, alt: "Small riven walnut coffee spoon", note: "A small scoop for coffee and spices, dark with walnut grain." },
  { name: "Spoon — Tasting", category: "Spoons", material: "Riven cherry", price: "$26", image: spoonImage, alt: "Small riven cherry tasting spoon", note: "A cook's tasting spoon, light in the hand and quick to clean." },
  { name: "Spoon — Porridge", category: "Spoons", material: "Riven birch", price: "$32", image: spoonImage, alt: "Riven birch porridge spoon with round bowl", note: "A round-bowled spoon made for slow breakfasts." },
  { name: "Spoon — Long Stir", category: "Spoons", material: "Riven ash", price: "$42", image: spoonImage, alt: "Long riven ash stirring spoon", note: "Reaches the bottom of the deepest pot without burning knuckles." },
  { name: "Spoon — Scoop", category: "Spoons", material: "Riven maple", price: "$36", image: spoonImage, alt: "Wide riven maple scoop spoon", note: "A wide, shallow scoop for flour, grains and dried goods." },
  { name: "Spoon — Pocket", category: "Spoons", material: "Riven rowan", price: "$30", image: spoonImage, alt: "Small riven rowan pocket spoon", note: "A small travel spoon that rides easily in a pocket or pack." },

  // ---- Spatulas ----
  { name: "Spatula — Sweep", category: "Spatulas", material: "Riven beech", price: "$32", image: spatulaImage, alt: "Hand-carved riven beech spatula with a thin swept blade", note: "A thin, flexible blade that stays strong because no fibre was cut.", featured: true },
  { name: "Spatula — Flip", category: "Spatulas", material: "Riven birch", price: "$34", image: spatulaImage, alt: "Wide riven birch flipping spatula", note: "A wide blade that slides under pancakes and fish without tearing." },
  { name: "Spatula — Pan Edge", category: "Spatulas", material: "Riven cherry", price: "$30", image: spatulaImage, alt: "Angled riven cherry pan-edge spatula", note: "Cut at an angle to follow the curve of a cast iron pan." },
  { name: "Spatula — Stirrer", category: "Spatulas", material: "Riven ash", price: "$28", image: spatulaImage, alt: "Flat riven ash stirring spatula", note: "A flat stirrer that scrapes the pot clean as it turns." },
  { name: "Spatula — Butter", category: "Spatulas", material: "Riven maple", price: "$24", image: spatulaImage, alt: "Small riven maple butter spatula", note: "A small spreader for butter, soft cheese and jam." },
  { name: "Spatula — Grill", category: "Spatulas", material: "Riven oak", price: "$38", image: spatulaImage, alt: "Heavy riven oak grill spatula", note: "A heavy blade for the grill, split from dense old oak." },
  { name: "Spatula — Narrow", category: "Spatulas", material: "Riven beech", price: "$26", image: spatulaImage, alt: "Narrow riven beech spatula", note: "Slim enough to slip into jars and along the sides of bowls." },
  { name: "Spatula — Offset", category: "Spatulas", material: "Riven walnut", price: "$36", image: spatulaImage, alt: "Offset riven walnut spatula", note: "An offset handle keeps your hand clear of the pan's heat." },
  { name: "Spatula — Broad", category: "Spatulas", material: "Riven birch", price: "$34", image: spatulaImage, alt: "Broad riven birch spatula", note: "A broad blade for turning large cuts and lifting bakes." },
  { name: "Spatula — Curved", category: "Spatulas", material: "Riven cherry", price: "$32", image: spatulaImage, alt: "Curved riven cherry spatula following the grain", note: "The curve came from the tree — the grain runs unbroken along it." },

  // ---- Bowls ----
  { name: "Bowl — Turned", category: "Bowls", material: "Reclaimed oak", price: "$74", image: bowlImage, alt: "Hand-turned reclaimed oak bowl", note: "Turned from old oak beams, finished with food-safe oil.", featured: true },
  { name: "Bowl — Serving", category: "Bowls", material: "Riven birch", price: "$88", image: bowlImage, alt: "Large riven birch serving bowl", note: "A large bowl for salads and sharing, light despite its size." },
  { name: "Bowl — Breakfast", category: "Bowls", material: "Riven cherry", price: "$52", image: bowlImage, alt: "Small riven cherry breakfast bowl", note: "Sized for porridge and yoghurt, warm in the hands." },
  { name: "Bowl — Deep", category: "Bowls", material: "Riven beech", price: "$68", image: bowlImage, alt: "Deep riven beech bowl", note: "Deep sides for soups, stews and generous helpings." },
  { name: "Bowl — Shallow", category: "Bowls", material: "Riven maple", price: "$58", image: bowlImage, alt: "Shallow riven maple bowl", note: "A shallow form for pasta, salads and bread." },
  { name: "Bowl — Nesting Pair", category: "Bowls", material: "Riven birch", price: "$96", image: bowlImage, alt: "Pair of nesting riven birch bowls", note: "Two bowls that nest together, split from the same log." },
  { name: "Bowl — Dough", category: "Bowls", material: "Reclaimed oak", price: "$110", image: bowlImage, alt: "Large reclaimed oak dough bowl", note: "A heavy bowl for kneading and proving bread dough." },
  { name: "Bowl — Snack", category: "Bowls", material: "Riven walnut", price: "$44", image: bowlImage, alt: "Small riven walnut snack bowl", note: "A small bowl for nuts, olives and berries." },
  { name: "Bowl — Pouring", category: "Bowls", material: "Riven cherry", price: "$72", image: bowlImage, alt: "Riven cherry bowl with pouring lip", note: "A pulled lip pours batter and sauces without drips." },
  { name: "Bowl — Footed", category: "Bowls", material: "Riven ash", price: "$84", image: bowlImage, alt: "Footed riven ash bowl", note: "A raised foot lifts the bowl and shows the grain below." },

  // ---- Boards ----
  { name: "Board — Cleaved", category: "Boards", material: "Riven birch", price: "$56", image: boardImage, alt: "Cleaved riven birch chopping board with a bark edge", note: "Split along the log, it stays flat and keeps its natural bark edge.", featured: true },
  { name: "Board — Butcher", category: "Boards", material: "Reclaimed oak", price: "$92", image: boardImage, alt: "Thick reclaimed oak butcher's board", note: "A thick, heavy board that takes decades of chopping." },
  { name: "Board — Serving", category: "Boards", material: "Riven walnut", price: "$64", image: boardImage, alt: "Riven walnut serving board", note: "Dark walnut with a live edge, made for cheese and bread." },
  { name: "Board — Bread", category: "Boards", material: "Riven beech", price: "$48", image: boardImage, alt: "Long riven beech bread board", note: "Long enough for a full loaf, with a handle carved from the same piece." },
  { name: "Board — Round", category: "Boards", material: "Riven cherry", price: "$58", image: boardImage, alt: "Round riven cherry chopping board", note: "A round board that shows the tree's rings at its centre." },
  { name: "Board — Paddle", category: "Boards", material: "Riven maple", price: "$52", image: boardImage, alt: "Paddle-shaped riven maple board", note: "A paddle shape for serving, hanging by its handle when not in use." },
  { name: "Board — Everyday", category: "Boards", material: "Riven birch", price: "$44", image: boardImage, alt: "Everyday riven birch chopping board", note: "The daily board — light, flat and kind to knife edges." },
  { name: "Board — Feast", category: "Boards", material: "Reclaimed oak", price: "$120", image: boardImage, alt: "Extra-large reclaimed oak feasting board", note: "An extra-large board for roasts, feasts and long tables." },
  { name: "Board — Small", category: "Boards", material: "Riven apple", price: "$36", image: boardImage, alt: "Small riven apple board", note: "A small board for fruit, herbs and a quick slice of cheese." },
  { name: "Board — Bark Edge", category: "Boards", material: "Riven ash", price: "$62", image: boardImage, alt: "Riven ash board with natural bark edge", note: "The bark edge is left on — a line of the tree on your table." },
];
