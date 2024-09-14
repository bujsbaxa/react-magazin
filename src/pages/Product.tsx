import { FC } from "react"
import MainLayout from "../layouts/MainLayout"
import ProductById from "../components/ProductById/ProductById"


const Product: FC = () => {
  return (
    <>
      <MainLayout>
        <ProductById/>
      </MainLayout>
    </>
  )
}

export default Product