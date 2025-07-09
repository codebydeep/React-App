import React from 'react'
import bgImage from "../assets/images/pexels-ketut-subiyanto-4669807.jpg"

const User = () => {
  return (
    <>
      <div className="max-w-2xl">
        <img
          className="rounded-2xl w-full h-auto [mask-image:linear-gradient(to_top,transparent,black_100%)]"
          src={bgImage}
          alt="Background"/>
      </div>
    </>
  )
}

export default User
