import { SearchOutlined } from "@mui/icons-material";

function PlaceholderInput({placeholder, onClick}) {
  return (
    <div>
      <div className='flex items-center bg-gray border border-slate-500 px-4 py-2 rounded gap-3'>
            <SearchOutlined className="!w-[14px]" />
            <button className='outline-none placeholder:text-body-dark-emphasized bg-transparent' onClick={onClick}>{placeholder}</button>
        </div>
    </div>
  );
}

export default PlaceholderInput;
