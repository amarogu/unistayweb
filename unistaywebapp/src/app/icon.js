export default function CustomIcon(props) {
    const Component = props.component
    const fontSize = props.fontSize
    return (
        <Component className={`text-bodyemphasized ${fontSize ? fontSize : 'text-xl'}`} />
    )
}