import ProductCard from "./ProductCard";
import { ProductDto } from "../Product.types";

interface ProductListProps {
  products: ProductDto[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}

export default ProductList;