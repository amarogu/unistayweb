import CustomIcon from "./icon";
import { Search } from "@mui/icons-material";

export default function SearchBar() {
    return (
        <div className="flex items-center w-2/5 dark:bg-gray bg-background-light-emphasized rounded-md px-4">
            <CustomIcon component={Search} fontSize="w-3" />
            <input type="text" placeholder="Search accommodations, locations..." className="bg-transparent text-xs focus:outline-none placeholder:text-xs w-full py-2 pl-2" />
        </div>
    )
}