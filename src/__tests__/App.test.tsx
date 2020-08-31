import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('Should exist', () => {
    expect(App).toBeTruthy();
  });
});
