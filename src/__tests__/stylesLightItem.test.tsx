import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import stylesLightItem from '../client/features/lights/lightsStyles/stylesLightItem';

configure({ adapter: new Adapter() });

describe('stylesLightItem object', () => {
  it('Should exist', () => {
    expect(stylesLightItem).toBeTruthy();
    expect(stylesLightItem).toBeInstanceOf(Function);
  });
});
