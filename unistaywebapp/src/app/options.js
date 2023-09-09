"use client";
import CustomIcon from "./icon";
import { LanguageOutlined as Lang } from "@mui/icons-material";
import { AccountCircleOutlined as Profile } from "@mui/icons-material";
import SimpleMenu from "./menu";
import { HomeOutlined as Home, NotificationsOutlined as Notification, ForumOutlined as Chats, CreditCardOutlined as Card, ExitToAppOutlined as LogOut, SettingsOutlined as Settings, CheckCircleOutline as Check } from '@mui/icons-material';
import {Menu as MenuIcon, Close} from '@mui/icons-material';
import { useState } from "react";

export default function Options() {
        const menu = {
            text: ['Home', 'Notifications', 'Chats', 'Rental billing', 'Log out', 'Settings'],
            icons: [Home, Notification, Chats, Card, LogOut, Settings]
        }
    
        const lang = {
            text: ["System Language", "English", "French", "Portuguese"],
            icons: [] // Initialize icons array with empty values
          };
        
          const [selectedLang, setSelectedLang] = useState(0);
        
          const handleLangSelect = (index) => {
            setSelectedLang(index);
          };
        
          const langIcons = lang.text.map((_, index) => {
            return index === selectedLang ? Check : null;
          });
        
          lang.icons = langIcons;
      

    return (
        <div className="flex items-start gap-2">
            <SimpleMenu text={lang.text} icons={lang.icons} button={Lang} buttonOpen={Lang} onSelect={handleLangSelect} menu={false} />
            <CustomIcon component={Profile} link />
            <SimpleMenu text={menu.text} icons={menu.icons} button={MenuIcon} buttonOpen={Close} onSelect={() => {}} menu={true} />
        </div>
    )
}