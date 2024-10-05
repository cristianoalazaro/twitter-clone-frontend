"use client"

import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Props = {
    label: string;
    onClick: () => void;
    size: 1 | 2 | 3;
}

export const Button = ({ label, onClick, size }: Props) => {
    return (
        <div 
            className={` flex justify-center items-center bg-white cursor-pointer text-black 
                font-bold rounded-3xl 
                ${size === 1 && 'h-14 text-lg'}
                ${size === 2 && 'h-10 text-sm'}
                ${size === 3 && 'h-7 text-xs'}
                `}
            onClick={onClick}
        >
            {label}
        </div>
    )
}