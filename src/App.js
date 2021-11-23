import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { light, dark } from './styles/theme'
import GlobalStyle from './styles/GlobalStyle'
import ModeToggle from './components/ModeToggle'
import Timer from './components/VisualTimer/Timer'
import Controller from './components/VisualTimer/Controller'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 400px;
  margin: 83px auto 0;
`

function App() {
  const [theme, setTheme] = useState(light)
  const handleToggleLightMode = () => {
    setTheme(theme === light ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <ModeToggle handleToggleLightMode={handleToggleLightMode} />
        <Timer />
        <Controller />
      </Container>
    </ThemeProvider>
  )
}

export default App
