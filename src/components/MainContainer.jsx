import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='h-[calc(100vh-4rem)'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer