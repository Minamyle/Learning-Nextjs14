export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productResponse = await fetch("http://localhost:3001/product", {
    next: {
      revalidate: 20,
    },
  });
  const products = await productResponse.json();
  console.log(products);
  return <>{children}</>;
}
