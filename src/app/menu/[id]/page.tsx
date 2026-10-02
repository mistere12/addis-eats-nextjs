type DishPageProps = {
  params: Promise<{ id: string }>;
};

export default async function DishPage({ params }: DishPageProps) {
  const { id } = await params;

  return (
    <main>
      <h1>Dish Details</h1>
      <p>Dish ID: {id}</p>
    </main>
  );
}