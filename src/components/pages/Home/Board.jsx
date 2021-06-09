import BoardRow from './BoardRow';
import { getAllShips } from 'utils/gameboard';

const arrayy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ships = getAllShips();
const Board = () => {
    return (
        <div className="p-5 bg-blue-400 w-max mt-10">
            {arrayy.map((i) => (
                <BoardRow key={i} i={i} ships={ships} />
            ))}
        </div>
    );
};

export default Board;
