import { Tooltip, Button } from "@radix-ui/themes"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const AppTheme = () => {
    return (
        <Tooltip content="Toggle theme">
            <Button className="cursor-pointer rt-r-py-2" size="2" color="gray" variant="ghost">
                <SunIcon width={16} height={16} />
            </Button>
        </Tooltip>
    )
}

export default AppTheme
