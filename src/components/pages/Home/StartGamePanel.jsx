import { Button, Select } from 'components/ui';
import { getLevels } from 'utils/constants/settings';
import PropTypes from 'prop-types';

const StartGamePanel = ({ initGame, level, chooseLevel, setShowStartPanel }) => {
    const handleStartGame = () => {
        initGame(true);
        setShowStartPanel(false);
    };

    const handleChangeLevel = (level) => {
        chooseLevel(level);
    };
    return (
        <div className="flex flex-col items-center rounded border-4 border-blue-600 m-10 p-10 h-full w-1/5">
            <div className="text-xl font-bold mb-2">Select your difficulty</div>
            <div className="mb-4">
                <Select dataList={getLevels()} selected={level} onChange={handleChangeLevel} />
            </div>
            <Button onClick={handleStartGame}>Start!</Button>
        </div>
    );
};

export default StartGamePanel;

StartGamePanel.propTypes = {
    initGame: PropTypes.func.isRequired,
    level: PropTypes.object.isRequired,
    chooseLevel: PropTypes.func.isRequired,
    setShowStartPanel: PropTypes.func.isRequired,
};
