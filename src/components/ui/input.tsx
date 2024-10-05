"use client"

import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Props = {
    placeholder: string;
    value?: string;
    password?: boolean;
    filled?: boolean;
    onChange?: (newValue: string) => void;
    icon?: IconDefinition;
    onEnter?: () => void;
}

export const Input = ({ placeholder, value, password, filled, onChange, icon, onEnter }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ((e.code.toLowerCase() === 'enter' || e.code.toLowerCase() === 'numpadenter') && onEnter) {
            onEnter();
        }
    }

    return (
        <div className={`has-[:focus]:border-white flex items-center border-2 border-gray-700 h-14 rounded-3xl
            ${filled && 'bg-gray-700'}`}>
            {icon && 
                <FontAwesomeIcon 
                    icon={icon} 
                    className=" ml-4 size-6 text-gray-500"

                />}
            <input
                className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                type={password && !showPassword ? 'password' : 'text'}
                onKeyUp={handleKeyUp}
            />
            {password && 
                <FontAwesomeIcon 
                    icon={showPassword ? faEye : faEyeSlash} 
                    className="cursor-pointer text-gray-500 size-6 mr-4"
                    onClick={() => setShowPassword(!showPassword)}
                />}
        </div>
    )
}