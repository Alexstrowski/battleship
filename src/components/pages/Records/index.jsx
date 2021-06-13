import Board from '../Home/Board';

const ships = window.localStorage.getItem('boardHistory');
const boardHistory = ships ? JSON.parse(ships) : [];
console.log(boardHistory);
const Records = () => {
    return (
        <div className="container mx-auto">
            {boardHistory.map((bd, key) => {
                return (
                    <div className="flex flex-col items-center mt-10" key={key}>
                        <div className="text-yellow-300 text-2xl font-bold">
                            Dificulty: {bd.level.shortName} - N° Shots: {bd.level.turns - bd.turnCounter}
                        </div>
                        <div>
                            <Board isGameStarted={false} ships={bd.ships} shotsMissed={bd.shotsMissed} isRecord />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Records;
