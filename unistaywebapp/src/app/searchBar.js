import CustomIcon from "./icon";
import { Search } from "@mui/icons-material";

export default function SearchBar(props) {
    const menu = props.menu
    return (
        <div className={`${menu ? "flex md:hidden mx-4 w-fit border border-body-dark/30 mb-4" : "hidden md:flex w-2/5"} items-center dark:bg-gray bg-background-light-emphasized rounded-md px-4`}>
            <CustomIcon component={Search} fontSize="w-3" />
            <input type="text" placeholder={`${menu ? "Search" : "Search accommodations, locations..."}`} className="bg-transparent text-xs focus:outline-none placeholder:text-xs w-full py-2 pl-2" />
        </div>
    )
}