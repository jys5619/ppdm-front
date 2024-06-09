import { styled } from 'styled-components'

interface AsideHideMenu {
  display: string
  setDisplay: (display: string) => void
}
export function AsideHideMenu({ display, setDisplay }: AsideHideMenu) {
  return (
    <Wrapper
      className={display === 'none' ? '' : 'active'}
      onClick={() => setDisplay(display === 'none' ? 'block' : 'none')}
    >
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.colorBackground};
  font-size: 1.5rem;
  display: block;
  font-weight: bold;
  text-decoration: none;
  padding: 0.6rem;
  width: 3rem;
  height: 3rem;
  margin: 0;
  text-align: center;
  cursor: pointer;
  position: relative;
  span {
    background: ${(props) => props.theme.colors.colorMainFont};
    position: absolute;
    left: 50%;
    width: 1.5rem;
    height: 0.3rem;
    border-radius: 0.2rem;
    transform: translate(-50%, 0) rotate(0deg);
    transition: 0.2s ease-in-out;
  }
  span:nth-child(1) {
    top: 0.9rem;
  }
  span:nth-child(2) {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  span:nth-child(3) {
    bottom: 0.9rem;
  }
  &.active {
    span:nth-child(1) {
      top: 40%;
      transform: translate(-50%, 50%) rotate(-45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      bottom: 40%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`

/*
.menu_icon { display: inline-block; position: relative; width: 50px; height: 40px; } 
.menu_icon span { position: absolute; left: 50%; width: 100%; height: 7px; background: #333; border-radius: 4px; transform:translate(-50%,0) rotate(0deg); transition: 0.2s ease-in-out; } 
.menu_icon span:nth-child(1) { top: 0px; } 
.menu_icon span:nth-child(2), 
.menu_icon span:nth-child(3) { top: 50%; transform: translate(-50%,-50%); } 
.menu_icon span:nth-child(4) { bottom: 0; } 
.menu_icon.active span:nth-child(1) { top: 50%; width: 0; transform: translate(-50%,-50%); }
.menu_icon.active span:nth-child(2) { transform:translate(-50%, -50%) rotate(45deg); } 
.menu_icon.active span:nth-child(3) { transform:translate(-50%, -50%) rotate(-45deg); } 
.menu_icon.active span:nth-child(4) { bottom: 50%; width: 0; transform: translate(-50%,50%); }
*/
