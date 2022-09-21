import Tile from './Tile';
import { shallow } from 'enzyme';


describe('Tile', () => {

  it('should be defined', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.length).toBe(1);
  })

  it('should add a class to make it clear a tile has been ocuppied', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.find('.tile-occupied').length).toBe(1);
  })

})