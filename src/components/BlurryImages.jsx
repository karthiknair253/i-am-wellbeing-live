import React from 'react'
const url = `${import.meta.env.VITE_PUBLIC_URL}/imgs-20/`

const BlurryImages = ({imgUrl}) => {
  return (
    <div
    className="d-block w-[80%] m-auto h-full lg:w-full"
    style={{
      backgroundImage: `url(${url}${imgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
  )
}

export default BlurryImages
