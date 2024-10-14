"use client"

import { useState } from "react";

type Props = {
    placeholder: string;
    rows: number;
    value?: string;
}

export const Textarea = ({ placeholder, rows, value }: Props) => {
    const [] = useState();

    return (
        <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
           <textarea
                placeholder={placeholder} 
                rows={rows}
                className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
                value={value}
            >
                {value}   
            </textarea> 
        </div>
    )
}