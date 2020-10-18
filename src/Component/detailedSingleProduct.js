import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useProduct} from '../Context/ProductContext'
import DetailedItem from './DetailedItem'
function DetailedSingleProduct() {
   const {products} = useProduct();
   const {id} = useParams();
   const selectedProduct = products.filter(product => (product._id === id));


    return (
      <div>  
      {selectedProduct.map(product => <DetailedItem name={product.name} id={product._id} description={product.description}  price={product.unitPrice} discount={product.discount} seller={product.postedBy.fullName}  review={product.review}/>)

      }
            </div> 
    )
}

export default DetailedSingleProduct
