export type CartItem = {
    id: string;
    createAt: Date;
    updatedAt: Date;
    purchaseId: string;
    productId: string;
    quantity: number;
}

export type CartDto = CartItem[]