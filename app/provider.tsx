'use client'
import {ReactNode} from "react";
import {Theme} from "@radix-ui/themes"
import { ThemeProvider } from 'next-themes'

interface ProviderProps {
    children: ReactNode
}

const Provider = ({
    children
}: ProviderProps) => {
    return (
        // <SessionProvider>
        <ThemeProvider attribute="class">
            <Theme>
                {children}
            </Theme>
        </ThemeProvider>
        // </SessionProvider>
    )
}

export default Provider
