import './Layout.css';
import GameBoard from '../GameBoard/GameBoard';
import Options from '../Options/Options';
import Player from '../Player/Player';

function Layout() {
    return (
        <div className="Layout">
            <div>
                <Player message={"Player One's Turn"}/>
                <GameBoard />
                <Options />
            </div>
        </div>
    );
}

export default Layout;
