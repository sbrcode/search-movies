import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '../utils/Themes'
import useDarkMode from 'use-dark-mode'
import '../index.css'

interface BannerProps {
  dark: boolean
}

const Banner = styled.nav<BannerProps>`
  display: flex;
  background-color: ${(props) => (props.dark ? colors.secondary : colors.primary)};
  flex-direction: row;
  padding: 2px;
  align-items: center;
`

const Title = styled.div`
  color: ${colors.white};
  text-align: center;
  font-family: ${fonts.primary};
  font-size: 1.5rem;
  flex: 1;
`

const NavBar = () => {
  const navigate = useNavigate()
  const darkMode = useDarkMode(false)

  const Toggle = ({ checked, onChange }: any) => (
    <span className="toggle-control">
      <input
        className="dmcheck"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
      />
      <label htmlFor="dmcheck" />
    </span>
  )

  return (
    <Banner dark={darkMode.value}>
      <button onClick={() => navigate(-1)}>{'<'}</button>
      <Title>Movies</Title>
      <span>☀</span>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <span>☾ </span>
    </Banner>
  )
}

export default NavBar
