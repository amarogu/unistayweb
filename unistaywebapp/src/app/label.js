import CustomIcon from "./icon"

export default function Label(props) {
    const text = props.text
    const Icon = props.icon
    const order = props.order
    const measures = props.measures
    return (
        <div className={`flex items-center gap-2 font-einaReg ${measures} cursor-pointer`}>
            {
                order ? (
                    <>
                        <CustomIcon component={Icon} fontSize="text-base" />
                        <p className="text-sm whitespace-nowrap">{text}</p>
                    </>
                ) : (
                    <>
                        <p className="text-sm whitespace-nowrap">{text}</p>
                        <CustomIcon component={Icon} fontSize="text-base" />
                    </>
                )
            }    
        </div>
    )
}