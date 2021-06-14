import { useState, useEffect, useContext } from 'react';
import Board from './Board';
import StartGamePanel from './StartGamePanel';
import BoardInfo from './BoardInfo';
import { SettingsContext } from 'context/SettingsContext';
import useLocalStorage from 'hooks/useLocalStorage';
import { getAllShips } from 'utils/gameboard';

const messages = {
    win: { message: 'You destroyed all the ships, you win.', color: 'text-green-500' },
    lose: { message: 'You did not destroy all the ships, you lose.', color: 'text-red-500' },
    none: { message: '', color: '' },
};
const randomShips = getAllShips();

const Home = () => {
    const { defaultLevel } = useContext(SettingsContext);
    const [ships, setShips] = useState(randomShips);
    const [shotsMissed, setShotsMissed] = useState([]);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [level, setLevel] = useState(defaultLevel);
    const [turnCounter, setTurnCounter] = useState(defaultLevel.turns);
    const [localStorageBoardHistory, setLocalStorageBoardHistory] = useLocalStorage('boardHistory', []);
    const [showStartPanel, setShowStartPanel] = useState(true);
    const [gameFinishedMessage, setGameFinishedMessage] = useState(messages.none);

    const validateEndGame = () => {
        const isAllShipsDestroyed = ships.every((ship) => ship.isSunken === true);
        if (isAllShipsDestroyed) {
            setGameFinishedMessage(messages.win);
            onFinishGame();
            return;
        }

        if (turnCounter === 0) {
            setGameFinishedMessage(messages.lose);
            onFinishGame();
            return;
        }
    };

    const onFinishGame = () => {
        setIsGameStarted(false);
        const boardHistory = {
            ships,
            shotsMissed,
            level,
            turnCounter,
        };
        setLocalStorageBoardHistory([...localStorageBoardHistory, boardHistory]);
    };

    useEffect(() => {
        setTurnCounter(level.turns);
    }, [level]);

    useEffect(() => {
        validateEndGame();
    }, [turnCounter]);

    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <Board
                    isGameStarted={isGameStarted}
                    setTurnCounter={setTurnCounter}
                    ships={ships}
                    setShips={setShips}
                    isRecord={false}
                    shotsMissed={shotsMissed}
                    setShotsMissed={setShotsMissed}
                />

                {showStartPanel ? (
                    <StartGamePanel
                        initGame={setIsGameStarted}
                        level={level}
                        chooseLevel={setLevel}
                        setShowStartPanel={setShowStartPanel}
                    />
                ) : (
                    <BoardInfo
                        level={level}
                        turns={turnCounter}
                        isGameStarted={isGameStarted}
                        setShips={setShips}
                        setShowStartPanel={setShowStartPanel}
                        gameFinishedMessage={gameFinishedMessage}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
