import Board from '../Home/Board';

const Records = () => {
    const boardHistoryLocalStorage = window.localStorage.getItem('boardHistory');
    const boardHistory = boardHistoryLocalStorage ? JSON.parse(boardHistoryLocalStorage) : [];
    return (
        <div className="container mx-auto">
            {boardHistory.map((bd, key) => {
                return (
                    <div className="flex flex-col items-center mt-10" key={key}>
                        <div className="flex w-6/12 justify-between">
                            <div className="text-yellow-400 text-2xl font-bold">Difficulty: {bd.level.shortName}</div>
                            <div className="text-yellow-400 text-2xl font-bold">N° Turns: {bd.level.turns}</div>
                            <div className="text-yellow-400 text-2xl font-bold">
                                N° Shots: {bd.level.turns - bd.turnCounter}
                            </div>
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
