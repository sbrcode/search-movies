import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '../utils/Themes'

const Banner = styled.div`
  background-color: ${colors.blue};
  flex-direction: row;
  padding: 5px;
`

const Title = styled.p`
  color: ${colors.white};
  text-align: center;
  font-family: ${fonts.primary};
  font-size: 1.5rem;
`

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <Banner>
        <button onClick={() => navigate(-1)}>{'<-'}</button>
        <Title>Movies</Title>
      </Banner>
    </nav>
  )
}

export default NavBar
