import { Flex, Box } from '@radix-ui/themes'
import AppTheme from '@/app/components/app-theme'
import ViewGithub from '@/app/components/view-github'

const headerAction = () => {
    return (
        <Flex className="rt-r-px-4" gap="5" align="center" direction="row">
            <Box>user</Box>
            <ViewGithub />
            <AppTheme />
        </Flex>
    )
}

export default headerAction
