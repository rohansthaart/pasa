import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import DetailedItem from './DetailedItem'
 import {useProduct} from '../Context/ProductContext'
function detailedSingleProduct() {
    const products = useProduct()
   
    return (
        <div>
            <DetailedItem/>
           <Link to = {`/product/id`}>a</Link>
        </div>
    )
}

export default detailedSingleProduct
