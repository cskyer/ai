import {Flex} from "@radix-ui/themes"
import Image from 'next/image'

const HeaderLogo = () => {
    return (
        <Flex className="rt-r-pl-4 rt-r-ai-center rt-r-overflow-hidden flex-shrink-0" width="250px" height="inherit">
            <Image src="/logo.svg" priority width="60" height={19} alt="AIGC"/>
        </Flex>
    )
}

export default HeaderLogo
