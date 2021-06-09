import { createContext } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import PropTypes from 'prop-types';
import { LEVELS } from 'utils/constants/settings';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
    const [customTurns, setCustomTurns] = useLocalStorage('customTurns', 45);
    const [level, setLevel] = useLocalStorage('level', LEVELS[0]);

    const updateCustomTurns = (turns) => {
        setCustomTurns(turns);
    };

    const updateLevel = (level) => {
        setLevel(level);
    };

    const data = { customTurns, level, updateCustomTurns, updateLevel };

    return <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>;
};

export { SettingsProvider, SettingsContext };

SettingsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
