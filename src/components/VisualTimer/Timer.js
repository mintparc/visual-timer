import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Clock = styled.div`
  position: relative;
  width: 336px;
  height: 336px;
  margin: 42px auto 0;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme.clockColor};
`

const CenterPoint = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.clockColor};
  z-index: 10;
`

const VisualTimer = styled.div`
  position: absolute;
  width: 336px;
  height: 336px;
  border-radius: 50%;
  background: ${({ theme }) => theme.spinnerColor};
`

const Rotate = styled.svg`
  position: relative;
  display: block;
`

const Spinner = styled.path`
  fill: ${({ theme }) => theme.backgroundColor};
  stroke: ${({ theme }) => theme.backgroundColor};
`

let timeLeft = 0
let α = 0
const π = Math.PI

function Timer() {
  const [minutes, setMinutes] = useState(0.5)
  const [d, setD] = useState(null)
  const time = ((minutes * 60) / 360) * 1000

  const draw = () => {
    α++
    α %= 360
    let r = (α * π) / 180
    let x = Math.sin(r) * 125
    let y = Math.cos(r) * -125
    let mid = α > 180 ? 1 : 0
    let anim = 'M 0 0 v -125 A 125 125 1 ' + mid + ' 1 ' + x + ' ' + y + ' z'

    return anim
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      timeLeft += 1
      setD(draw())
      if (timeLeft === 360) {
        alert('time is up ! ✨')
        clearTimeout(timeout)
      }
    }, time)
  }, [d])

  return (
    <Clock>
      <CenterPoint />
      <VisualTimer>
        <Rotate viewBox='0 0 250 250'>
          <Spinner transform='translate(125, 125)' d={d} />
        </Rotate>
      </VisualTimer>
    </Clock>
  )
}

export default Timer
