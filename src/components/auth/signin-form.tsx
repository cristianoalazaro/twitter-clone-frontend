"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "../ui/input";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../ui/button";

export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleButtonEnter = () => {
        router.replace('/home');
    }

    return (
        <>
        <Input 
            placeholder="Digite seu e-mail" 
            value={emailField}
            onChange={t => setEmailField(t)}
            icon={faHeart}
        />
        <Input 
            password
            placeholder="Digite sua senha" 
            value={passwordField}
            onChange={t => setPasswordField(t)}
        />

        <Button 
            label="Entrar" 
            onClick={handleButtonEnter} 
            size={1}
        />
        </>
    )
}