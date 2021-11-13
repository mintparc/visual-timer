import styled from 'styled-components'

const Switch = styled.div`
  float: right;
  width: 75px;
  padding: 4px;
  border-radius: 200px;
  background: ${({ theme }) => theme.toggleColor};
  transition: all 0.3s;
  cursor: pointer;
`

const Toggle = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  left: ${({ theme }) => theme.toggleLeft};
  border-radius: 100%;
  background: #fff;
  transition: all 0.3s;
`

function ModeToggle({ handleToggleLightMode }) {
  return (
    <Switch onClick={handleToggleLightMode.bind()}>
      <Toggle />
    </Switch>
  )
}

export default ModeToggle
