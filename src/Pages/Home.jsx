import React from 'react'
import Hero from '../Components/Hero'
import Support from '../Components/Support'
import FeatureProduct from '../Components/FeatureProduct'
import Categorys from '../Components/Categorys'
import FoodStore from '../Components/FoodStore'
import Stat from '../Components/Stat'
import BestSale from '../Components/BestSale'

export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <Support></Support>
        <FeatureProduct></FeatureProduct>
        <Categorys></Categorys>
        <FoodStore></FoodStore>
        <Stat></Stat>
        <BestSale></BestSale>
    </div>
  )
}
