import { ProductDto } from "../Product.types";

interface productDetailsProps {
    product: ProductDto
}

function ProductDetails({ product }: productDetailsProps) {
    return (
        <>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div>{product.description}</div>
            <div>Price: ${parseFloat(product.price).toFixed(2)}</div>
        </>
    );
}

export default ProductDetails;