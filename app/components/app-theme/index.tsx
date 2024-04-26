"use client"

import { useCallback, useEffect } from 'react'
import { Tooltip, Button } from "@radix-ui/themes"
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const AppTheme = () => {
    const { theme, setTheme } = useTheme()

    const changeTheme = useCallback((themeMode: string) => {
        const dom = document.documentElement.classList
        dom.remove('dark-theme', 'light-theme')
        if (localStorage.theme === 'dark-theme' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark-theme')
            dom.add('dark-theme');
        } else {
            setTheme('light-theme');
            dom.add('light-theme');
        }
    }, [setTheme]);

    useEffect(() => {
        if (theme) changeTheme(theme)
    }, [changeTheme, theme])

    return (
        <Tooltip content="Toggle theme">
            <Button className="cursor-pointer rt-r-py-2" size="2" color="gray" variant="ghost">
                <SunIcon className="sun" width={16} height={16} onClick={() => setTheme('dark-theme')} />
                <MoonIcon className="moon" width={16} height={16} onClick={() => setTheme('light-theme')} />
            </Button>
        </Tooltip>
    )
}

export default AppTheme
