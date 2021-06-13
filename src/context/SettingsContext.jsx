import { createContext } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import PropTypes from 'prop-types';
import { getLevels, CUSTOM_TURNS_BY_DEFAULT } from 'utils/constants/settings';

const SettingsContext = createContext();
const levels = getLevels();

const SettingsProvider = ({ children }) => {
    const [customTurns, setCustomTurns] = useLocalStorage('customTurns', CUSTOM_TURNS_BY_DEFAULT);
    const [defaultLevel, setDefaultLevel] = useLocalStorage('level', levels[0]);

    const updateCustomTurns = (turns) => {
        setCustomTurns(turns);
    };

    const updateLevel = (level) => {
        setDefaultLevel(level);
    };

    const data = { customTurns, defaultLevel, updateCustomTurns, updateLevel };

    return <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>;
};

export { SettingsProvider, SettingsContext };

SettingsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
