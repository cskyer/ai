"use client"

import { useCallback, useEffect } from 'react'
import { Tooltip, Button } from "@radix-ui/themes"
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const AppTheme = () => {
    const { theme, systemTheme, setTheme } = useTheme()

    const changeTheme = useCallback(() => {
        const resolvedTheme = theme === 'system' ? systemTheme : theme;
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        const newThemeMatchesSystem = newTheme === systemTheme;
        setTheme(newThemeMatchesSystem ? 'system' : newTheme)
    }, [systemTheme, theme, setTheme]);

    return (
        <Tooltip content="Toggle theme">
            <Button className="cursor-pointer rt-r-py-2" size="2" color="gray" variant="ghost">
                <SunIcon className="sun" width={16} height={16} onClick={changeTheme} />
                <MoonIcon className="moon" width={16} height={16} onClick={changeTheme} />
            </Button>
        </Tooltip>
    )
}

export default AppTheme
