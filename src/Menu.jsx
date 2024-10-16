export default function GameList(props) {
    return (
        <li>
            <p>
                <strong>{props.title}</strong> {props.description}
            </p>
        </li>
    )
}