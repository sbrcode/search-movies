import styled from 'styled-components'
import { colors } from '../utils/Themes'

const Banner = styled.p`
  background-color: ${colors.blue};
  padding: 5px;
  color: ${colors.white};
  text-align: center;
  font-family: roboto;
  font-size: 1.5rem;
`

const NavBar = () => {
  return (
    <nav>
      <Banner>Movies</Banner>
    </nav>
  )
}

export default NavBar
