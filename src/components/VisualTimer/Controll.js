import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Controller = styled.section`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin: 42px 0 0;
`

const Minutes = styled.input`
  width: 90px;
  padding: 10px 25px;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};
  ::placeholder {
    color: ${({ theme }) => theme.fontColor};
  }
  background: ${({ theme }) => theme.buttonColor};
`

const Button = styled.button`
  width: 90px;
  padding: 10px 25px;
  outline: none;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.fontColor};
  background: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
`

function Controll() {
  return (
    <Controller>
      <Minutes placeholder='Min' />
      <Button>Start</Button>
      <Button>Clear</Button>
    </Controller>
  )
}

export default Controll
