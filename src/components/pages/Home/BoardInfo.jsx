import PropTypes from 'prop-types';
import { Button } from 'components/ui';
import { SVG } from 'assets/svg';
const iconLevels = {
    Easy: '😀',
    Medium: '😐',
    Hard: '😡',
    Custom: '🤠',
};

const BoardInfo = ({ level, turns, isGameStarted, setShowStartPanel, gameFinishedMessage }) => {
    const restartGame = () => {
        setShowStartPanel(true);
        window.location.reload();
    };

    return (
        <div className="flex flex-col items-center rounded border-4 border-blue-600 m-10 p-10 h-full w-1/5">
            <div className="text-3xl font-bold mb-2">Difficulty: </div>
            <div className="text-3xl font-bold mb-10">
                {level.shortName} {iconLevels[level.shortName]}
            </div>
            <div className="text-3xl font-bold mb-2">Turns: </div>
            <div className="text-4xl font-bold mb-10">{turns}</div>
            <div className="flex w-full justify-around mb-2">
                <div className="flex items-center">
                    <img className="h-12 w-12 mr-1" src={SVG.sunken_ship_1}></img>
                    <div className="flex text-xl font-bold text-gray-400">x4</div>
                </div>
                <div className="flex items-center">
                    <img className="h-12 w-12 mr-1" src={SVG.sunken_ship_2}></img>
                    <div className="text-xl font-bold text-gray-400">x3</div>
                </div>
            </div>
            <div className="flex w-full justify-around mb-10">
                <div className="flex items-center">
                    <img className="h-12 w-12 mr-1" src={SVG.sunken_ship_3}></img>
                    <div className="flex text-xl font-bold text-gray-400">x2</div>
                </div>
                <div className="flex items-center">
                    <img className="h-12 w-12 mr-1" src={SVG.sunken_ship_4}></img>
                    <div className="text-xl font-bold text-gray-400">x1</div>
                </div>
            </div>
            <div className={`text-xl font-bold mb-10 text-center ${gameFinishedMessage.color}`}>
                {gameFinishedMessage.message}
            </div>

            {!isGameStarted && <Button onClick={restartGame}>Try again !</Button>}
        </div>
    );
};

export default BoardInfo;

BoardInfo.propTypes = {
    level: PropTypes.any,
    turns: PropTypes.number.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    setShowStartPanel: PropTypes.func.isRequired,
    gameFinishedMessage: PropTypes.object.isRequired,
};
