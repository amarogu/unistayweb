import DropdownMenu from './DropdownMenu';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <Logo />
            <div className='flex gap-4'>
                <a className='underline'>Login</a>
                <a className='underline'>Signup</a>
                <div>
                    <DropdownMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
