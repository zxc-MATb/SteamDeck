import Button from "./Button.jsx";
import SquareButton from "./SquareButton.jsx";
import GameList from "./Menu.jsx";
import { games } from "./Menu.js";
import PowerButton from "./PowerButton.jsx";

function App() {
    return (
        <div>
            <Button />
            <SquareButton />
            <ul>
                <GameList {...games[0]}
                    />
                <GameList {...games[1]}
                />
                <GameList {...games[2]}
                />
                <GameList {...games[3]}
                />
            </ul>
            {/*<PowerButton />*/}
        </div>
    )
}

export default App