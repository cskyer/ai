"use client"

import {ReactNode} from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
    children: ReactNode
}

const NavLink = ({
    children,
    href,
    ...rest
}: NavLinkProps) => {
    const pathname = usePathname()
    const isActive = href === pathname

    return (
        <Link className={isActive ? 'text-cyan-500' : ''} href={href} {...rest}>{children}</Link>
    )
}

export default NavLink
