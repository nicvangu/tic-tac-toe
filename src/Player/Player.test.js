import Player from './Player';
import { shallow } from 'enzyme';


describe('Player', () => {

  it('should be defined', () => {
    const wrapper = shallow(<Player />);
    expect(wrapper.length).toBe(1);
  })

  it('should contain a message', () => {
    const message = 'Player 1 turn'
    const wrapper = shallow(<Player  message={message}/>);
    expect(wrapper.html().includes(message)).toBeTruthy();
  })

})