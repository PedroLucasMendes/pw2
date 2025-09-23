import { cleanEnv, port } from "envalid";
import dotenv from "dotenv";

dotenv.config({ quiet : true});

function getEnv(){
    return cleanEnv(process.env, {

        PORT: port({ default: 7788 }),

    })
}

export default getEnv;