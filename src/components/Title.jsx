import React from 'react'

const Title = ({theTitle}) => {
  return (
    <div className='pt-20 mb-10'>
        <h3 className='text-center text-[--primary-dark] text-2xl font-semibold'>{theTitle}</h3>
        <div className='theDivider border-b-4 border-[--primary-dark] w-20 m-auto pt-2'></div>
    </div>
  )
}

export default Title