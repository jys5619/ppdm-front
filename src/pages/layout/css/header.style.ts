import styled from 'styled-components'

export const NavFrame = styled.nav`
  display: flex;
  width: 100%;
  padding: 0;
  align-items: stretch;
`

export const Menu = styled.div`
  flex-wrap: wrap;
  flex-shrink: 0;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
`

export const MenuLink = styled.a`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  margin: 0;
  padding: 0.6rem 2rem;
  font-size: 1.5rem;
`

export const MenuSlice = styled.div`
  flex-grow: 1;
`
