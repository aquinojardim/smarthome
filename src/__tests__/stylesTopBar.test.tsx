import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import stylesTopBar from '../client/features/navigation/navigationStyles/stylesTopBar';

configure({ adapter: new Adapter() });

describe('stylesTopBar object', () => {
  it('Should exist', () => {
    expect(stylesTopBar).toBeTruthy();
    expect(stylesTopBar).toBeInstanceOf(Function);
  });
});
