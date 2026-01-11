import React from 'react'
import errorImage from '../assets/images/error.jpg';

const Error = () => {
  return (
    <>
      <div className="container relative mx-auto px-10">
        <img src={errorImage} alt="Error 404 - Page Not Found" className="mx-auto mt-20 w-2xl"/>
      </div>  
    </>
  )
}

export default Error
