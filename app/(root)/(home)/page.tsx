import Auth from '@/components/auth'
import React from 'react'

function Home() {
    const user = false

    if (!user) {
        return <Auth/>
    }
  return (
    <div>Home</div>
  )
}

export default Home