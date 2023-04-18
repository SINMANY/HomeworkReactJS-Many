import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    const [products, setProducts] = useState([{}])

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data)
			})
            console.log(products);
	})
  return (
    <div className='d-flex flex-wrap container '>
        {
            products.map(p => 
                <ProductCard product={p}/>
                )
        }
    </div>
  )
}

export default Products