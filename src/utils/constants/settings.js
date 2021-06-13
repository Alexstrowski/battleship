export const CUSTOM_TURNS_BY_DEFAULT = 45;

export const getLevels = () => {
    const customTurns = window.localStorage.getItem('customTurns');
    return [
        { id: 1, name: 'Easy - Infinity turns', shortName: 'Easy', turns: 200 },
        { id: 2, name: 'Medium - 100 turns', shortName: 'Medium', turns: 100 },
        { id: 3, name: 'Hard - 50 turns', shortName: 'Hard', turns: 5 },
        {
            id: 4,
            name: 'Custom',
            shortName: 'Custom',
            turns: customTurns ? JSON.parse(customTurns) : CUSTOM_TURNS_BY_DEFAULT,
        },
    ];
};
