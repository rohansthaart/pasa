import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import DetailedItem from './DetailedItem'
 import {useProduct} from '../Context/ProductContext'
function DetailedSingleProduct() {
   const {products} = useProduct();
   const {id} = useParams();
   const selectedProduct = products.filter(product => (product._id === id));
    return (
        <div>
        
            <DetailedItem/>
         
        </div>
    )
}

export default DetailedSingleProduct
