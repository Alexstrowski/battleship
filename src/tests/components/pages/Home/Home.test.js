import { shallow, mount } from 'enzyme';
import Home from 'components/pages/Home';
import { SettingsProvider } from 'context/SettingsContext';

describe('Tests in <Home />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <SettingsProvider>
                <Home />
            </SettingsProvider>,
        );
    });

    test('Must render <Home /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('The game should start correctly', () => {
        let wrapperMount = mount(
            <SettingsProvider>
                <Home />
            </SettingsProvider>,
        );
        const buttonComponent = wrapperMount.find('#start-button').at(0);
        buttonComponent.find('button').at(0).simulate('click');
        const difficultyText = wrapperMount.find('p').at(0).text().trim();
        const turnsText = wrapperMount.find('p').at(1).text().trim();
        expect(difficultyText).toBe('Difficulty:');
        expect(turnsText).toBe('Turns:');
    });

    test('The table must have 100 cells', () => {
        let wrapperMount = mount(
            <SettingsProvider>
                <Home />
            </SettingsProvider>,
        );
        const boardCell = wrapperMount.find('#board-cell');
        expect(boardCell.length).toBe(100);
    });
});
