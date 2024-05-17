import { useEffect } from 'react'
import { useUnit } from 'effector-react'
import { setTotalPrice } from '@/context/cart'
import { usePriceAnimation } from './usePricceAnimation'
import { useGoodsByAuth } from './useGoodsByAuth'
import { $totalPrice, $cart, $cartFromLs } from '@/context/cart/state'

export const useTotalPrice = () => {
  const totalPrice = useUnit($totalPrice)
  const currentCartByAuth = useGoodsByAuth($cart, $cartFromLs)

  const getNewTotal = () =>
    currentCartByAuth
      .map((item) => +item.price * +item.count)
      .reduce((defaultCount, item) => defaultCount + item, 0)

  const {
    value: animatedPrice,
    setFrom,
    setTo,
  } = usePriceAnimation(totalPrice, getNewTotal())

  useEffect(() => {
    setTotalPrice(getNewTotal())
    setFrom(totalPrice)
    setTo(getNewTotal())
  }, [currentCartByAuth])

  return { animatedPrice }
}
