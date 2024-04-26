// 'use client'
import {ReactNode} from "react";
import {Theme} from "@radix-ui/themes";
// import {ThemeProvider} from 'next-themes';

interface ProviderProps {
    children: ReactNode
}

const Provider = ({
    children
}: ProviderProps) => {
    // const [appTheme, setAppTheme] = useState<'light' | 'dark'>('light')
    // const prefersRef = useRef(null)
    //
    // const changeTheme = () => {
    //     // @ts-ignore
    //     const isDark = prefersRef.current?.matches
    //     console.log(isDark, 'isDark')
    //     setAppTheme(isDark ? 'dark' : 'light')
    // }
    //
    // useEffect(() => {
    //     console.log('useEffect')
    //     'use client'
    //     // @ts-ignore
    //     prefersRef.current = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    //     changeTheme()
    //     // @ts-ignore
    //     prefersRef.current.addEventListener('change', changeTheme)
    // }, []);

    return (
        // <SessionProvider>
        // <ThemeProvider attribute="class">
            <Theme>
                {children}
            </Theme>
        // </ThemeProvider>
        // </SessionProvider>
    )
}

export default Provider
