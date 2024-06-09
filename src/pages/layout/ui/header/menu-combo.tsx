import { useState } from 'react'
import styled from 'styled-components'

interface MenuComboProps {
  title: string
  options: {
    title: string
    onClick: () => void
  }[]
}

export function MenuCombo({ title, options }: MenuComboProps) {
  const [display, setDisplay] = useState<string>('none')

  return (
    <MenuComboWrapper onMouseLeave={() => setDisplay('none')}>
      <MenuComboTitle>
        <a onClick={() => setDisplay((state) => (state === 'none' ? 'block' : 'none'))}>
          {title} <span style={{ fontSize: '0.8rem' }}>▼</span>
        </a>
      </MenuComboTitle>
      <MenuComboList display={display}>
        <MenuComboListBox>
          {options.map((option) => (
            <MenuComboOption
              key={option.title}
              onClick={() => {
                setDisplay('none')
                option.onClick()
              }}
            >
              {option.title}
            </MenuComboOption>
          ))}
        </MenuComboListBox>
      </MenuComboList>
    </MenuComboWrapper>
  )
}

const MenuComboWrapper = styled.div`
  padding: 0 !important;
  margin: 0 !important;
  font-size: 1.5rem;
`

const MenuComboTitle = styled.div`
  display: inline-block;
  text-decoration: none;
  padding: 0.6rem 2rem;
  height: 3rem;
  margin: 0;
`

interface MenuListProps {
  display: string
}

const MenuComboList = styled.div<MenuListProps>`
  font-size: 1.2rem;
  position: relative;
  padding: 0 2rem;
  text-align: right;
  display: ${(props) => props.display};
`
//0 10px 10px rgba(160, 160, 160, 0.22);
const MenuComboListBox = styled.div`
  box-shadow: ${(props) => props.theme.colors.colorShadow};
  background-color: ${(props) => props.theme.colors.colorBackground};
  text-align: left;
  padding: 0.6rem 2rem;
  border: 1px solid ${(props) => props.theme.colors.colorBorder};
  display: inline-block;
`

const MenuComboOption = styled.div`
  padding: 0.4rem 0;
  cursor: pointer;
  button {
    cursor: pointer;
  }
`
