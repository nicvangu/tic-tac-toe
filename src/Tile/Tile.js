import './Tile.css';

function Tile(props) {
    const { onClick, index, value } = props;
    const ocuppiedClass = value != '' ? 'tile-occupied': '';
    return <div id={`tile-${index}`} className={`tile ${ocuppiedClass}`} onClick={onClick}>{value}</div>
}

export default Tile;