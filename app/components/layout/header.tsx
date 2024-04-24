import NavLink from "@/app/components/ui/nav-link";
import React from "react";

const Header = () => {
    return (
        <header className="fixed flex w-full bg-gray-100 p-3 border-b-sm border-b-gray-200 shadow-sm">
            <nav>
                <ul className="flex gap-3">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/about">About</NavLink></li>
                    <li><NavLink href="/contact">Contact</NavLink></li>
                    <li><NavLink href='/users'>Users</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
