import { ReactNode } from 'react'
import {Box, Flex, Link, Text} from '@radix-ui/themes'

import styles from './style.module.scss'

interface NavLinkProps {
    children: ReactNode;
    href: string;
    active?: boolean
}

const NavLink = ({
    children,
    href,
    active
}: NavLinkProps) => {
    const {a, b} = {a: 1, b:2}

    return (
        <Box className={styles.nav_link_item}>
            <Link className={active ? 'nav_link_active nav_link' : 'nav_link'} href={href} underline="none">
                <Flex className="rt-r-ai-center rt-r-gap-2">
                    <Text size="2">{children}</Text>
                </Flex>
            </Link>
        </Box>
    )
}

export default NavLink
