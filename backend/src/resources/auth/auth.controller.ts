import { Request, Response } from 'express';
import { SignUpDto } from './auth.types';
import { createUser, getUser } from '../user/user.service';
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

        res.status(StatusCodes.OK).json({
            userId: user.id,
            userType: user.userTypeId,
            userName: user.name,
        });

    }catch (err){
        console.log(err);
        res.json(err)   
    }
}

const me = async (req: Request, res: Response) => {
    const user = await getUser(req.session.userId);
    if (user) {
        return res.status(StatusCodes.OK).json({
            userId: user.id,
            userType: user.userTypeId,
            userName: user.name,
        });
    } else{
        return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
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
  me
};
