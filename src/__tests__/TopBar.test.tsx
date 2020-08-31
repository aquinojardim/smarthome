import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopBar from '../client/features/navigation/TopBar';

configure({ adapter: new Adapter() });

describe('TopBar Component', () => {
  it('Should exist', () => {
    expect(TopBar).toBeTruthy();
  });
});
