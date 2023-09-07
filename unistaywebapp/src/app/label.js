import CustomIcon from "./icon"

export default function Label(props) {
    const text = props.text
    const Icon = props.icon
    return (
        <div className="flex items-center gap-2 font-einaReg">
            <p className="text-sm">{text}</p>
            <CustomIcon component={Icon} fontSize="text-base" />    
        </div>
    )
}