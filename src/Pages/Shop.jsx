import React from 'react'
import useProducts from '../Hook/useProducts'

export default function Shop() {
    const [products] = useProducts()
    console.log(products)
  return (
    <div>
        <h1>product : {products.length}</h1>
    </div>
  )
}
