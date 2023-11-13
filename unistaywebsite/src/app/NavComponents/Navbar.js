import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import Modal from '../GeneralUse/Modal';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <Logo />
            <div className='flex gap-4'>
                <Modal button="Login" />
                <a className='underline'>Signup</a>
                <div>
                    <DropdownMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
