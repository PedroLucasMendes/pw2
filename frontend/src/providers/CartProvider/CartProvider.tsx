import {createContext, useState, ReactNode };

interface CartContextProps {
    cartProducts: Record<string, number>; 
    incCartProduct: (productId: string) => void;
    decCartProduct: (productId: string) => void;

}

const initialCart: CartContextProps = {
    cartProducts: {},
    incCartProduct: () =>  {},
    decCartProduct: () => {},
}

export const CartContext = createContext<CartContextProps>(initialCart)

function CartProvider({ children } : { children: ReactNode}) { 
    const [cartProducts, setCartProducts] = useState<ReactNode>
    const incCartProduct = (productId: string) => {
        setCartProducts(c => ({
            ...c,
            [productId]: (c[productId] ?? 0) + 1
        }))
    }
    const decCartProduct = (productId: string) => {
        if (cartProducts[productId] === 1) {
            const copyCartProducts = { ...cartProducts }
            delete copyCartProducts[productId];
            setCartProducts(copyCartProducts);
        } else {
        setCartProducts((c) => ({
            ...c,
            [productId]: c[productId] - 1
            }));
        }
    };
}

export default CartProvider