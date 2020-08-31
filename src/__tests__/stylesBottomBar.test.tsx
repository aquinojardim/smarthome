import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import stylesBottomBar from '../client/features/navigation/navigationStyles/stylesBottomBar';

configure({ adapter: new Adapter() });

describe('stylesBottomBar object', () => {
  it('Should exist', () => {
    expect(stylesBottomBar).toBeTruthy();
    expect(stylesBottomBar).toBeInstanceOf(Function);
  });
});
