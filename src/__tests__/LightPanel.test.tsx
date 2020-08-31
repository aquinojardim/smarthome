import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LightPanel from '../client/features/lights/LightPanel';

configure({ adapter: new Adapter() });

describe('LightPanel Component', () => {
  it('Should exist', () => {
    expect(LightPanel).toBeTruthy();
  });
});
