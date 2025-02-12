import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import GenerateButton from '../components/GenerateButton'

const Home = () => {
    return (
        <div>
            <Header />
            <Steps />
            <Description />
            <GenerateButton />
        </div>
    )
}

export default Home