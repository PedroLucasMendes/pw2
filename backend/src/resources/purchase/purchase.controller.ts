import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { getCartItems } from './purchase.service';

const cart = async (req: Request, res: Response) => {
    const userId = req.session.userId; // Assuming user ID is available in the request object
    if (!userId) return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);

    try {
        const userCart = await getCartItems(userId);
        res.status(StatusCodes.OK).json(userCart);

    } catch (error) {
        console.log(error)
    }
}

export default {cart};