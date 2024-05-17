'use client'
import { useGate } from 'effector-react'
import Categories from '@/components/modules/MainPage/Categories/Categories'
import Hero from '@/components/modules/MainPage/Hero/Hero'
import { MainPageGate } from '@/context/goods'
import BestsellerGoods from '@/components/modules/MainPage/BestsellerGoods'
import NewGoods from '@/components/modules/MainPage/NewGoods'
import BrandLife from '@/components/modules/MainPage/BrandLife'
import { usePageTitle } from '@/hooks/usePageTitle'

const MainPage = () => {
  useGate(MainPageGate)
  usePageTitle('main')

  return (
    <main>
      <Hero />
      <Categories />
      <NewGoods />
      <BestsellerGoods />
      <BrandLife />
    </main>
  )
}

export default MainPage
