import Logo from "./logo"
import Options from "./options"
import SearchBar from "./searchBar"

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between dark:text-body-dark-emphasized">
            <Logo />
            <SearchBar menu={false} />
            <Options />
        </nav>
    )
}