import { shallow, mount, render } from 'enzyme';
import Home from 'components/pages/Home/Home';
import { SettingsProvider } from 'context/SettingsContext';

describe('Tests in <Home />', () => {
    let wrapper = shallow(
        <SettingsProvider>
            <Home />
        </SettingsProvider>,
    );

    test('Must render <Home /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('The game should start correctly', () => {});
});
