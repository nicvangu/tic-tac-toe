import './Game.css';
import GameBoard from '../GameBoard/GameBoard';
import Options from '../Options/Options';
import Player from '../Player/Player';

function Game() {

    function startGame() {
        
    }

    return (
        <div className="Game">
            <div>
                <Player message={"Player One's Turn"}/>
                <GameBoard />
                <Options />
            </div>
        </div>
    );
}

export default Game;
