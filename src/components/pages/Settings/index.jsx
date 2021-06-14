import { useContext } from 'react';
import { Card, Select, Input } from 'components/ui';
import { SettingsContext } from 'context/SettingsContext';
import { getLevels } from 'utils/constants/settings';

const Settings = () => {
    const { customTurns, defaultLevel, updateCustomTurns, updateLevel } = useContext(SettingsContext);
    const handleChangeLevel = (level) => {
        updateLevel(level);
    };

    const handleChangeTurns = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value === '0') {
            value = 1;
        }
        updateCustomTurns(value);
    };
    return (
        <div className="container mx-auto w-2/6">
            <Card>
                <div className="flex flex-auto mb-12">
                    <div className="w-6/12 mr-20 text-xl font-bold">Default difficulty:</div>
                    <div className="w-6/12 mr-20">
                        <Select dataList={getLevels()} selected={defaultLevel} onChange={handleChangeLevel} />
                    </div>
                </div>
                <div className="flex flex-auto mb-12">
                    <div className="w-6/12 mr-20 text-xl font-bold">Turns by default: </div>
                    <div className="w-6/12 mr-20">
                        <Input type="text" value={customTurns} onChange={handleChangeTurns} />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Settings;
