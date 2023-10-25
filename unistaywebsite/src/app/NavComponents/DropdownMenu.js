'use client'
import { Menu, Transition } from '@headlessui/react'
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LockIcon from '@mui/icons-material/Lock';

function DropdownMenu() {
  return (
    <Menu>
        <Menu.Button className="outline-none">
            <MenuIcon className='text-lg' />
        </Menu.Button>
        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Menu.Items className="border-body-dark/30 p-5 flex backdrop-blur-sm flex-col border rounded-md mt-4 outline-none text-sm font-medium text-gray-700 bg-gradient-to-br from-gray/60 to-gray absolute -translate-x-[85%]">
                <Menu.Item className="py-2">
                    <div className='flex items-center gap-3'>
                        <a
                        >
                        Privacy
                        </a>
                        <LockIcon  className='text-base'/>
                    </div>
                </Menu.Item>
                <Menu.Item className="py-2">
                    <div className='flex items-center gap-3'>
                        <a
                        >
                        Help
                        </a>
                        <HelpOutlineIcon  className='text-base'/>
                    </div>
                </Menu.Item>
                <Menu.Item className="py-2">
                    <div className='flex items-center gap-3'>
                        <a
                        >
                        Features
                        </a>
                        <LibraryBooksIcon  className='text-base'/>
                    </div>
                </Menu.Item>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}

export default DropdownMenu;