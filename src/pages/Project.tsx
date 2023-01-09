import React, { useState } from 'react'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'

import useGlobalState from '../global/GlobalSate'

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  .body-2 {
    text-align: start;
  }

  .top_nav_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--height-top-bar);
    padding: 0 24px;
    background-color: var(--color-light-grey);
    border-bottom: 2px solid var(--color-secondary);

    .future_logo {
      width: 100%;
      position: absolute;
      left: 0;
    }
  }

  .page_content {
    height: calc(100vh - var(--height-top-bar));
    display: flex;
  }
`

const Project = (): JSX.Element => {
  const navigate = useNavigate()

  const { userName } = useGlobalState()

  const handleSignOut = async (): Promise<any> => {
    await Auth.signOut()
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log('error signing out: ', error)
      })
  }

  return (
    <StyledProject>
      <div className="top_nav_bar">
        <h1 className="heading-1">{userName}</h1>
        <h1 className="heading-1 future_logo">Template Site</h1>
        <Button
          onClick={() => {
            void handleSignOut()
          }}
        >
          Sign Out
        </Button>
      </div>
      <div className="page_con">
        <h1 className="heading-1">Welcome Nicks Template Site</h1>
        <h3 className="heading-2">
          This project was set up to get you up and running fast AF
        </h3>
        <h3 className="body-1">Let's get this project in motion</h3>
      </div>
    </StyledProject>
  )
}

export default Project
