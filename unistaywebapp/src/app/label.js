import CustomIcon from "./icon"

export default function Label(props) {
    const text = props.text
    const Icon = props.icon
    const order = props.order
    const measures = props.measures
    const textProperties = props.textProperties
    return (
        <div className={`flex items-center gap-2 font-einaReg ${measures} cursor-pointer`}>
            {
                order ? (
                    <>
                        <CustomIcon component={Icon} fontSize="text-base" />
                        <p className={`${textProperties}`}>{text}</p>
                    </>
                ) : (
                    <>
                        <p className={`${textProperties}`}>{text}</p>
                        <CustomIcon component={Icon} fontSize="text-base" />
                    </>
                )
            }    
        </div>
    )
}