
import CustomIcon from "./icon";
import { LanguageOutlined as Lang } from "@mui/icons-material";
import { AccountCircleOutlined as Profile } from "@mui/icons-material";
import SimpleMenu from "./menu";
import { HomeOutlined as Home, NotificationsOutlined as Notification, ForumOutlined as Chats, CreditCardOutlined as Card, ExitToAppOutlined as LogOut, SettingsOutlined as Settings, Close } from '@mui/icons-material';

export default function Options() {
    const items = {
        text: ['Home', 'Notifications', 'Chats', 'Rental billing', 'Log out', 'Settings'],
        icons: [Home, Notification, Chats, Card, LogOut, Settings]
      }
    return (
        <div className="flex items-start gap-2">
            <CustomIcon component={Lang} link />
            <CustomIcon component={Profile} link />
            <SimpleMenu text={items.text} icons={items.icons} />
        </div>
    )
}