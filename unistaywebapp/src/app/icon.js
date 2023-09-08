export default function CustomIcon(props) {
    const Component = props.component
    const width = props.fontSize
    const link = props.link
    return (
        <Component className={`text-bodyemphasized ${width ? width : 'w-5'} ${link ? 'cursor-pointer' : ''}`} />
    )
}