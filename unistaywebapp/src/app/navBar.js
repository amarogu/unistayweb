import Logo from "./logo"
import Options from "./options"
import SearchBar from "./searchBar"

export default function NavBar() {
    return (
        <nav className="flex items-center container sm:max-w-[516px] md:max-w-[768px] p-5 pl-0 pr-10 top-0 lg:max-w-[1024px] border-box dark:bg-background bg-background-light justify-between dark:text-body-dark-emphasized z-10 fixed">
            <Logo />
            <SearchBar menu={false} />
            <Options />
        </nav>
    )
}