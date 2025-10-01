import { Request, Response } from 'express';
import { SignUpDto } from './auth.types';
import { createUser } from '../user/user.service';
import { UserTypes } from '../userType/userType.constants';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { checkCredentials } from './auth.service';
import { LoginDto } from './auth.types';



const signup = async (req: Request, res: Response) => {

    const data = req.body as SignUpDto;
    try {
        const user = await createUser({...data, userTypeId: UserTypes.client});
        res.json(user);
    }catch (err){
        console.log(err);
        res.json(err)
    }

}
const login= async (req: Request, res: Response) => {

    const data = req.body as LoginDto;
    try {
        const user = await checkCredentials(data);
        if (!user) return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
        req.session.userType = user.userTypeId;
        req.session.userId = user.id;

        res.status(StatusCodes.OK).json(ReasonPhrases.OK);

    }catch (err){
        console.log(err);
        res.json(err)   
    }
}
const logout = async (req: Request, res: Response) => {
    
    delete req.session.userId;
    delete req.session.userType;

    res.status(StatusCodes.OK).json(ReasonPhrases.OK);

}



export default {
  signup,
  login,
  logout,
};
