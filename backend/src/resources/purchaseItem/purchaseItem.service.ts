import { PrismaClient } from '../../generated/prisma';
import { getCart } from '../purchase/purchase.service';


const prisma = new PrismaClient();

export const decPurchaseItem = async (userId: string, productId: string) => {
    const cart = await getCart(userId);
    const purchaseItem = await prisma.purchaseItem.findFirst({
        where: {
            purchaseId: cart.id,
            productId
        }
    });

    if (!purchaseItem) throw new Error('Para decremetar o item, ele deve existir no carrinho');
    if(purchaseItem.quantity == 1) {
        purchaseItem = await prisma.purchaseItem.delete({
            where: {
                id: purchaseItem.id,
                productId,
            }
        });
    } else {
        await prisma.purchaseItem.update({
            where: {
                id: purchaseItem.id
            },
            data: {
                purchaseId: cart.id,
                productId,
                quantity: purchaseItem.quantity - 1
            }
        });
    }

}



export const incPurchaseItem = async (userId: string, productId: string) => {
    const cart = await getCart(userId);
    let purchaseItem = await prisma.purchaseItem.findFirst({
        where: {
            purchaseId: cart.id,
            productId
        }
    });

    if(!purchaseItem) {
        purchaseItem = await prisma.purchaseItem.create({
            data: {
                purchaseId: cart.id,
                productId,
                quantity: 1
            }
        });
    } else {
        await prisma.purchaseItem.update({
            where: {
                id: purchaseItem.id
            },
            data: {
                purchaseId: cart.id,
                productId,
                quantity: purchaseItem.quantity + 1
            }
        });
    }

}