import Cart from "@/views/cart/Cart";
import { ProductDto } from "@/views/product/Product.types";
import Teste from "@/components/Teste/Teste";


async function CartPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOCKER_API}/product`);
  const products: ProductDto[] = await res.json();
  return (
    <Teste>
      <Cart products={products} />
    </Teste>
  );
}

export default CartPage;