import React, {useContext} from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrums  from '../components/BreadCrums/Breadcrums'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../components/RelatedProducts/RelatedProduct'

export const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_product.find(e => e.id === Number(productId))

    return (
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox/>
            <RelatedProduct/>
        </div>
    )
}
