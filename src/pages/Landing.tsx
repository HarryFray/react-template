import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 0 200px;
  height: 100%;

  .heading-1 {
    color: var(--color-primary);
  }

  .heading-2 {
    color: var(--color-light-grey);
  }

  .body-1 {
    color: var(--color-light-grey);
  }

  button {
    margin-top: 24px;
  }
`

const Landing = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <StyledLanding>
      <h1 className="heading-1">Sign Into Nicks Template Site</h1>
      <h3 className="heading-2">
        This project was set up to get you up and running fast AF
      </h3>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/auth/sign-up')
        }}
      >
        Sign Up
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/auth/sign-in')
        }}
      >
        Sign In
      </Button>
    </StyledLanding>
  )
}

export default Landing
