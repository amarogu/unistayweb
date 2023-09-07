import Image from "next/image";
import CustomIcon from "./icon";
import { LanguageOutlined as Lang } from "@mui/icons-material";
import { AccountCircleOutlined as Profile } from "@mui/icons-material";
import { Menu, MenuButton, MenuItem, Dropdown } from "@mui/base";
import SimpleMenu from "./menu";

export default function Options() {
    return (
        <div className="flex items-center gap-2">
            <CustomIcon component={Lang} />
            <SimpleMenu />
        </div>
    )
}