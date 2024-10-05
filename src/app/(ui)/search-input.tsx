"use client"

import { Input } from "@/components/ui/input"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
}

export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
    const router = useRouter();
    const pathName = usePathname();

    const [searchInput, setSearchInput] = useState(defaultValue ?? '');

    const handleSearchEnter = () => {
        if (searchInput) {
            router.push('/search?q=' + encodeURIComponent(searchInput));
        }
    }

    if (pathName === '/search' && hideOnSearch) return null;

    return (
        <Input 
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange={t => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />
    )
}