import React from 'react'
import ContentLoader from 'react-content-loader'

const ProductsSkeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 430 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="18" ry="18" width="430" height="230" /> 
    <rect x="0" y="250" rx="0" ry="0" width="100" height="24" /> 
    <rect x="0" y="290" rx="0" ry="0" width="250" height="20" />
  </ContentLoader>
  )
}

export default ProductsSkeleton