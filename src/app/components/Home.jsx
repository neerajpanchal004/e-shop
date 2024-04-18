import React from 'react'
import AppLayout from './AppLayout'
import ImageSlider from './ImageSlider'
import GridSection from './GridSection'
import LoremCard from './LoremCard'
import Accordion from './Accordian'

const Home = () => {
  return (
    <AppLayout>
        <ImageSlider/>
        <GridSection/>
        <LoremCard/>
        <Accordion/>
    </AppLayout>
  )
}

export default Home