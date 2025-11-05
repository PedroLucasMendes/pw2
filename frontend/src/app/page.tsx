import ProductList from "@/views/product/list/ProductList";
import { ProductDto } from "@/views/product/Product.types";
import Teste from "@/components/Teste/Teste";

async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOCKER_API}/product`);
  const products: ProductDto[] = await res.json();
  return (
    <Teste>
      <ProductList products={products} />
    </Teste>
  );
}

export default Home;