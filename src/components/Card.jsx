import { useEffect, useState } from "react"

export default function Products(props) {
  const {handleAddToCart} = props
  // console.log(props)
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("./products.JSON")
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  // console.log(products)



  return (
   <div >
    <h1 className="text-center text-4xl m-10 text-green-500 font-bold">Products Item</h1>
        
  <div className="grid grid-cols-3 gap-5">
  {
      products.map(product=><div className="card bg-base-100 w-96 shadow-xl">

        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(product)} className="btn btn-primary text-white bg-green-500">Buy Now</button>
          </div>
        </div>
      </div>)
    }
  </div>
   </div>
  )
}
