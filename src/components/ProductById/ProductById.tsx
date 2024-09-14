import { FC } from 'react'
import s from './ProductById.module.scss'
import { getProductById } from '../../services/products'
import { useParams } from 'react-router-dom'

const ProductById: FC = () => {
  
    const params = useParams()
    
    const { data } = getProductById(Number(params.id))
    console.log(data);
    
  
    return (
        <div>ProductById</div>
    )
}

export default ProductById