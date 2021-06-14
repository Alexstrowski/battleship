import { mount, shallow } from 'enzyme';
import BoardCell from 'components/pages/Home/BoardCell';

describe('Tests in <BoardCell />', () => {
    let wrapper;
    const setTurnCounter = jest.fn();
    const ship = { x: 0, y: 0, isHit: true, isSunken: false, type: 3, id: 'f0ffc56d-077a-4c26-9e27-6f0909288370' };
    const ships = [
        {
            x: 0,
            y: 0,
            isHit: false,
            isSunken: false,
            type: 3,
            id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
        },
        {
            x: 0,
            y: 1,
            isHit: true,
            isSunken: false,
            type: 3,
            id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
        },
        {
            x: 0,
            y: 2,
            isHit: true,
            isSunken: false,
            type: 3,
            id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
        },
    ];
    const setShips = jest.fn();
    const shotsMissed = [];
    const setShotsMissed = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
            <BoardCell
                row={0}
                column={0}
                isShip
                isGameStarted
                setTurnCounter={setTurnCounter}
                ship={ship}
                ships={ships}
                setShips={setShips}
                isRecord={false}
                shotsMissed={shotsMissed}
                setShotsMissed={setShotsMissed}
            />,
        );
    });

    test('Must render <BoardCell /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Must render empty cell correctly', () => {
        expect(wrapper.contains('img')).toBe(false);
    });

    test('Must render gray cell correctly', () => {
        const wrapperGrayCell = shallow(
            <BoardCell
                row={0}
                column={0}
                isShip={false}
                isGameStarted
                setTurnCounter={setTurnCounter}
                ship={ship}
                ships={ships}
                setShips={setShips}
                isRecord={false}
                shotsMissed={shotsMissed}
                setShotsMissed={setShotsMissed}
            />,
        );
        wrapperGrayCell.simulate('click');
        const divCell = wrapperGrayCell.find('div').at(1);
        const className = divCell.prop('className');
        expect(className.includes('bg-gray-300')).toBe(true);
    });

    test('Must render explosion cell correctly', () => {
        wrapper.simulate('click');
        const img = wrapper.find('img').at(0);
        expect(img.prop('src')).toBe('explosion.svg');
    });

    test('Must render explosion cell correctly', () => {
        wrapper.simulate('click');
        const img = wrapper.find('img').at(0);
        expect(img.prop('src')).toBe('explosion.svg');
    });

    test('Must render sunken ship cell correctly', () => {
        const sunkenShip = {
            x: 0,
            y: 0,
            isHit: true,
            isSunken: true,
            type: 1,
            id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
        };
        const sunkenShips = [
            {
                x: 0,
                y: 0,
                isHit: true,
                isSunken: true,
                type: 1,
                id: 'f0ffc56d-077a-4c26-9e27-6f0909288370',
            },
        ];
        const wrapperSunkenShipCell = mount(
            <BoardCell
                row={0}
                column={0}
                isShip
                isGameStarted
                setTurnCounter={setTurnCounter}
                ship={sunkenShip}
                ships={sunkenShips}
                setShips={setShips}
                isRecord={false}
                shotsMissed={shotsMissed}
                setShotsMissed={setShotsMissed}
            />,
        );
        wrapperSunkenShipCell.simulate('click');
        const img = wrapperSunkenShipCell.find('img').at(0);
        expect(img.prop('src')).toBe('ship1.svg');
    });
});
