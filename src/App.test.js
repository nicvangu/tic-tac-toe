import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {

  it('should be defined', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  })

})