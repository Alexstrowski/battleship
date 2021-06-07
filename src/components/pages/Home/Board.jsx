import BoardRow from './BoardRow';
import { getAllShips } from 'utils/gameboard';
const SIZE = 10;

const arrayy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ships = getAllShips();
const Board = () => {
    return (
        <div>
            {arrayy.map((i) => (
                <BoardRow key={i} i={i} ships={ships} />
            ))}
        </div>
    );
};

export default Board;
