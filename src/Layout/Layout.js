import './Layout.css';
import GameBoard from '../GameBoard/GameBoard';
import Options from '../Options/Options';

function Layout() {
    return (
        <div className="Layout">
            <div>
                <GameBoard />
                <Options />
            </div>
        </div>
    );
}

export default Layout;
