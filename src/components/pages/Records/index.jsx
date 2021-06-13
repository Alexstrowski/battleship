import Board from '../Home/Board';

const ships = window.localStorage.getItem('boardHistory');
const boardHistory = ships ? JSON.parse(ships) : [];
console.log(boardHistory);
const Records = () => {
    return (
        <div className="container mx-auto">
            {boardHistory.map((ship, key) => {
                return (
                    <div className="flex justify-center" key={key}>
                        <Board isGameStarted={false} ships={ship} isRecord />
                    </div>
                );
            })}
        </div>
    );
};

export default Records;
