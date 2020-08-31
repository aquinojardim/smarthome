import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BottomBar from '../client/features/navigation/BottomBar';

configure({ adapter: new Adapter() });

describe('BottomBar Component', () => {
  it('Should exist', () => {
    expect(BottomBar).toBeTruthy();
  });
});
