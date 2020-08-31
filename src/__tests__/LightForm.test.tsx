import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LightForm from '../client/features/lights/lightsComponents/LightForm';

configure({ adapter: new Adapter() });

describe('LightForm Component', () => {
  it('Should exist', () => {
    expect(LightForm).toBeTruthy();
  });
});
