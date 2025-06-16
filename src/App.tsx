import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './pages/HomePage/HomePage'
import FavoritesPage from './pages/FavoritePage/FavoritesPage'
import PhotoDetailsPage from './pages/PhotoPage/PhotoPage'
import GlobalStyles from './GlogalStyles'
import logo from './assets/logo.svg'
import favorite from './assets/favorite.svg'

const AppWrapper = styled.div``

const Header = styled.header`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  background: #000;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: #111827;

  &:hover {
    opacity: 0.8;
  }
`

const Main = styled.main`
  /* padding: 2rem; */
`

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header>
        <StyledLink to="/">
          <img src={logo} alt="Logo"  />
        </StyledLink>
        <StyledLink to="/favorites"><img src={favorite} /></StyledLink>
      </Header>

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/photo/:id" element={<PhotoDetailsPage />} />
        </Routes>
      </Main>
    </AppWrapper>
  )
}

export default App
