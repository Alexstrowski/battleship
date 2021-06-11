import { Button, Select } from 'components/ui';
import { LEVELS } from 'utils/constants/settings';
import PropTypes from 'prop-types';

const StartGamePanel = ({ initGame, level, chooseLevel }) => {
    const handleStartGame = () => {
        initGame(true);
    };

    const handleChangeLevel = (level) => {
        chooseLevel(level);
    };
    return (
        <div>
            <div>Select your difficulty</div>
            <Select dataList={LEVELS} selected={level} onChange={handleChangeLevel} />
            <Button onClick={handleStartGame}>Start!</Button>
        </div>
    );
};

export default StartGamePanel;

StartGamePanel.propTypes = {
    initGame: PropTypes.func.isRequired,
    level: PropTypes.object.isRequired,
    chooseLevel: PropTypes.func.isRequired,
};
