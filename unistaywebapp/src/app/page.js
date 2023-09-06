import { LanguageOutlined as Lang } from "@mui/icons-material";
import { AccountCircleOutlined as Profile } from "@mui/icons-material";

function CustomIcon(Prop) {
  return <Prop className="text-bodyemphasized text-2xl" />
}

export default function Pagey() {
  return (
    <div className="bg-background-light dark:bg-background w-full h-[100vh]">
      {CustomIcon(Lang)}
      {CustomIcon(Profile)}
    </div>
  )
}