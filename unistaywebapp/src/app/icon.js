export default function CustomIcon(props) {
    const Component = props.component
    const width = props.fontSize
    return (
        <Component className={`text-bodyemphasized ${width ? width : 'w-5'}`} />
    )
}