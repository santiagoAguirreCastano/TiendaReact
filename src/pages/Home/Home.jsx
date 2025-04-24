import { useEffect, useState } from "react"
import { Card } from "../../Layouts/Card/Card"
const URL = 'https://fakestoreapi.com/products'

export const Home = () => {

  const [products, setProducts] = useState([])

  const handleGetProducts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setProducts(data)
  }

  return (
    <>
      <button className="" onClick={handleGetProducts}>Traer Productos</button>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {
          products.map(products => (
            <Card key={products.id} {...products} />
          ))
        }
      </section>
    </>
  )
}