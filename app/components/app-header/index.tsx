import { Flex } from '@radix-ui/themes'
import HeaderLogo from "@/app/components/header-logo"
import HeaderMenu from "@/app/components/header-menu"
import HeaderAction from "@/app/components/header-action"

import styles from './style.module.scss'

const AppHeader = () => {
    return (
        <Flex gap="4" asChild height="var(--header-height)">
            <header className={styles.app_header}>
                <HeaderLogo />
                <HeaderMenu />
                <HeaderAction />
            </header>
        </Flex>
    )
}

export default AppHeader
