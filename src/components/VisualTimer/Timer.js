import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Clock = styled.div`
  position: relative;
  width: 336px;
  height: 336px;
  margin: 159px auto 0;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme.clockColor};
`

const CenterPoint = styled.div`
  position: absolute;
  width: 31.5px;
  height: 31.5px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.clockColor};
  z-index: 10;
`

const VisualTimer = styled.div`
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

const minutes = 0.1
let α = 0
const π = Math.PI
let time = ((minutes * 60) / 360) * 1000

function Timer() {
  const [d, setD] = useState(null)

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
      return setD(draw())
    }, time)
    if (timeout === 364) {
      clearTimeout(timeout)
    }
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
