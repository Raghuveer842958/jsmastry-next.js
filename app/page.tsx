import Hello from '@/components/Hello';
import React from 'react'

const page = () => {
  console.log("This is a server component ");
  return (
    <main>
      <div>Home page</div>
      <Hello/>
    </main>
  )
}

export default page