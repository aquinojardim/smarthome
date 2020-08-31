import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LightItem from '../client/features/lights/lightsComponents/LightItem';

configure({ adapter: new Adapter() });

describe('LightItem Component', () => {
  it('Should exist', () => {
    expect(LightItem).toBeTruthy();
  });
});
