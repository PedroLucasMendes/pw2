
import { PrismaClient } from "@prisma/client"
import { LoginDto } from "./auth.types"
import { compare } from "bcryptjs";
import { User } from "../../generated/prisma";
const prisma = new PrismaClient();

export const checkCredentials = async(data: LoginDto) : Promise<User | null> => {
    console.log(data);
    const user = await prisma.user.findFirst({where : { 
            email: data.email
        } })
    if (!user) {
        console.log("no user found");        
        return null;
    }

    const ok = await compare(data.password, user.password);
    console.log(ok);
    if (ok) {
        console.log("password match");        
        return user;
    }

    return null;
 
}
