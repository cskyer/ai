import { Tooltip, Button, Link } from "@radix-ui/themes"
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const ViewGithub = () => {
    return (
        <Tooltip content="View github">
            <Button asChild className="cursor-pointer rt-r-py-2" size="2" color="gray" variant="ghost">
                <Link href="https://github.com/qq2575896094" color="gray" target="_blank">
                    <GitHubLogoIcon width={16} height={16} />
                </Link>
            </Button>
        </Tooltip>
    )
}

export default ViewGithub
