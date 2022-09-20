import Layout from './Game';
import { shallow } from 'enzyme';


describe('Layout', () => {

  it('should be defined', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.length).toBe(1);
  })

  it('should contain the GameBoard', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.html().includes("game-board")).toBeTruthy();
  })

  it('should contain the Options', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.html().includes("Options")).toBeTruthy();
  })

  it('should contain the Player', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.html().includes("Player")).toBeTruthy();
  })

})