import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

export default function MenuPage() {
  return (
    <main>
      <h1>Menu</h1>
      <p>Browse our dishes.</p>

      <CategoryBar />
      <DishList />
      
    </main>
  );
}