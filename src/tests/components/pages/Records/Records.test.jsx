import { shallow, mount, render } from 'enzyme';
import Records from 'components/pages/Records';

describe('Tests in <Records />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Records />);
    });

    test('Must render <Records /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
