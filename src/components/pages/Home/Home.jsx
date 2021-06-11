import { useState, useEffect } from 'react';
import Board from './Board';
import StartGamePanel from './StartGamePanel';
import BoardInfo from './BoardInfo';
import { LEVELS } from 'utils/constants/settings';
import useLocalStorage from 'hooks/useLocalStorage';

const Home = () => {
    const [boardHistory, setBoardHistory] = useState([]);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [level, setLevel] = useState(LEVELS[0]);
    const [turnCounter, setTurnCounter] = useState(LEVELS[0].turns);
    const [localStorageBoardHistory, setLocalStorageBoardHistory] = useLocalStorage('boardHistory', []);

    const validateEndGame = () => {
        console.log('bh', boardHistory);
        console.log('local', localStorageBoardHistory);
        if (turnCounter === 0) {
            setIsGameStarted(false);
            setLocalStorageBoardHistory([...localStorageBoardHistory, boardHistory]);
        }
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
                    setBoardHistory={setBoardHistory}
                />
                <StartGamePanel
                    initGame={setIsGameStarted}
                    level={level}
                    chooseLevel={setLevel}
                    setTurns={setTurnCounter}
                />
                {isGameStarted && <BoardInfo level={level} turns={turnCounter} />}
            </div>
        </div>
    );
};

export default Home;
