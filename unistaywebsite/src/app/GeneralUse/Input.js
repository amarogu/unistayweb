import PropTypes from 'prop-types';
import { SearchOutlined } from '@mui/icons-material';

const Input = ({placeholder}) => {
    return (
        <div className='flex items-center bg-gray border border-slate-500 px-4 py-2 rounded gap-3'>
            <SearchOutlined className='text-sm' />
            <input className='outline-none placeholder:text-body-dark-emphasized bg-transparent' placeholder={placeholder} />
        </div>
    );
};

export default Input;