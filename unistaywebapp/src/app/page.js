import { Home as HomeIcon } from "@mui/icons-material";

function CustomIcon() {
  return <HomeIcon className="text-red-950" />
}

export default function Pagey() {
  return (
    <div className="bg-background-light dark:bg-background">
      <CustomIcon />
    </div>
  )
}