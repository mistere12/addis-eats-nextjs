import Link from "next/link";

const dishes = [
  {
    id: "doro-wot",
    name: "Doro Wot",
  },
  {
    id: "kitfo",
    name: "Kitfo",
  },
  {
    id: "shiro",
    name: "Shiro",
  },
];

export default function DishList() {
  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <h2>{dish.name}</h2>
          <Link href={`/menu/${dish.id}`}>View dish</Link>
        </div>
      ))}
    </div>
  );
}