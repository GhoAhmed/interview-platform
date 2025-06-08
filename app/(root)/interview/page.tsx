import Agent from '@/components/Agent'
import React from 'react'

const Page = () => {
    return (
        <>
            <h3>Interview</h3>
            <Agent userName="Me" userId='user1' type={'generate'} />
        </>
    )
}

export default Page