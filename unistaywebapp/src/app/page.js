import { LanguageOutlined as Lang } from "@mui/icons-material";
import { AccountCircleOutlined as Profile } from "@mui/icons-material";
import Logo from "./logo";
import Options from "./options";

export default function Pagey() {
  return (
    <div className="bg-background-light dark:bg-background w-full h-[100vh]">
      <Logo />
      <Options />
    </div>
  )
}