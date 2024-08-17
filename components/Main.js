import React from 'react'

export default function Main(props) {
    const {children} = props
  return (
    <main className='flex-1 flex flex-colp-4 sm:p-8 p-4 '>
        {children}
    </main>
  )
}
