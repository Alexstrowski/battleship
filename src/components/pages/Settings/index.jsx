import { useContext } from 'react';
import { Card, Select, Input } from 'components/ui';
import { SettingsContext } from 'context/SettingsContext';
import { LEVELS } from 'utils/constants/settings';

const Settings = () => {
    const { customTurns, level, updateCustomTurns, updateLevel } = useContext(SettingsContext);
    const handleChangeLevel = (level) => {
        updateLevel(level);
    };

    const handleChangeTurns = (e) => {
        updateCustomTurns(e.target.value);
    };
    return (
        <div className="container mx-auto">
            <Card>
                <div className="flex flex-auto mb-12">
                    <div className="w-6/12 mr-20">Turnos por defecto</div>
                    <div className="w-6/12 mr-20">
                        <Input type="text" value={customTurns} onChange={handleChangeTurns} />
                    </div>
                </div>
                <div className="flex flex-auto mb-12">
                    <div className="w-6/12 mr-20">Dificultad por defecto</div>
                    <div className="w-6/12 mr-20">
                        <Select dataList={LEVELS} selected={level} onChange={handleChangeLevel} />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Settings;
