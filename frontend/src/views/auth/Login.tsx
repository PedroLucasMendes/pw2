'use client'

import TextInput from "@/components/form/TextInput/TextInput";
import React, { useContext, FormEvent, use } from "react";
import {useState} from "react";

import { AuthContext } from "@/providers/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {login} = useContext(AuthContext);
    const router = useRouter();

    const [error, setError] = useState("")

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            router.push("/");
        } else {
            setError("Email e/ou senha incorretos!")
        }
    }


    return (
        <div>
            <h1 className="">Login do usuario</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">

                <TextInput 
                value={email} 
                onChange={setEmail} 
                name="email" 
                label="Email" 
                focus
                />

                <TextInput 
                value={password} 
                onChange={setPassword} 
                name="password" 
                label="Senha" 
                type="password"
                error={error}
                />

                <button 
                type="submit" 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                Enviar
                </button>
            </form>
        </div>
    );
}

export default Login;