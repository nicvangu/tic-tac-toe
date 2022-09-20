import Options from './Options';
import { shallow } from 'enzyme';


describe('Options', () => {

  it('should be defined', () => {
    const wrapper = shallow(<Options />);
    expect(wrapper.length).toBe(1);
  })

})