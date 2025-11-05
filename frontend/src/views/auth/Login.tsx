'use client'

import TextInput from "@/components/form/TextInput/TextInput";
import React from "react";
import {useState} from "react";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div>
            <h1 className="">Login do usuario</h1>

            <form method="post" onSubmit={() => {}} className="flex flex-col gap-4 max-w-md">

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