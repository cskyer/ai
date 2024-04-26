import { ScrollArea, Box } from '@radix-ui/themes'

import NavLink from "@/app/components/nav-link"

import styles from './style.module.scss'

interface AppAsideProps {
    prefix: string
}

const AppAside = ({
    prefix
}: AppAsideProps) => {
    return (
        <Box className={styles.app_aside}>
            <ScrollArea asChild scrollbars="vertical" radius="full">
                <Box asChild className="rt-r-px-3 rt-r-pt-4 rt-r-pb-8">
                    <aside>
                        <NavLink active href={`${prefix}/overview`}>概览</NavLink>
                        <NavLink href={`${prefix}/other`}>其他</NavLink>
                    </aside>
                </Box>
            </ScrollArea>
        </Box>
    )
}

export default AppAside
