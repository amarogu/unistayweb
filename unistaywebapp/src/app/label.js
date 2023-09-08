import CustomIcon from "./icon"

export default function Label(props) {
    const text = props.text
    const Icon = props.icon
    return (
        <div className="flex items-center gap-2 font-einaReg my-4 pl-4 pr-10 cursor-pointer">
            <p className="text-sm whitespace-nowrap">{text}</p>
            <CustomIcon component={Icon} fontSize="text-base" />    
        </div>
    )
}