import Logo from "./logo"
import Options from "./options"

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between">
            <Logo />
            <Options />
        </nav>
    )
}