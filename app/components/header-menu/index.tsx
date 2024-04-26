"use client"

import { Flex, TabNav } from '@radix-ui/themes'
import {usePathname} from "next/navigation"

import styles from './style.module.scss'

const HeaderMenu = () => {
    const pathname = usePathname()

    return (
        <Flex gap="3" className={styles.header_menu}>
            <TabNav.Root color="indigo">
                <TabNav.Link href="/node" active={pathname.startsWith('/node')}>Nodejs</TabNav.Link>
                <TabNav.Link href="/go" active={pathname.startsWith('/go')}>Go</TabNav.Link>
                <TabNav.Link href="/docker" active={pathname.startsWith('/docker')}>Docker</TabNav.Link>
                <TabNav.Link href="/mongodb" active={pathname.startsWith('/mongodb')}>MongoDB</TabNav.Link>
            </TabNav.Root>
        </Flex>
    )
}

export default HeaderMenu
