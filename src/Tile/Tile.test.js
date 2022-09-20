import Tile from './Tile';
import { shallow } from 'enzyme';


describe('Tile', () => {

  it('should be defined', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.length).toBe(1);
  })

})