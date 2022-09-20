import Layout from './Layout';
import { shallow } from 'enzyme';


describe('Layout', () => {

  it('should be defined', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.length).toBe(1);
  })

})