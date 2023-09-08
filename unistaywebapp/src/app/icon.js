export default function CustomIcon(props) {
    const Component = props.component
    const width = props.fontSize
    const link = props.link
    if (!Component) {
        return null; // Return null if the component is null
    }
    return (
        <Component className={`text-bodyemphasized ${width ? width : 'w-5'} ${link ? 'cursor-pointer' : ''}`} />
    )
}