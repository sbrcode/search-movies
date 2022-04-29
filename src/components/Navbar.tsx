import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '../utils/Themes'

const Banner = styled.nav`
  display: flex;
  background-color: ${colors.blue};
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

  return (
    <Banner>
      <button onClick={() => navigate(-1)}>{'<'}</button>
      <Title>Movies</Title>
    </Banner>
  )
}

export default NavBar
