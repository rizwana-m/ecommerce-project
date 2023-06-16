import React from 'react'
// import { Link } from 'react-router-dom'
// import ProdList from './ProdList'
import Footer from './Footer'
import ProdList from './ProdList'
const Categorieshop = () => {

   


  return (
    <>
    <div className='categories-container'>
        <div className='categories-text'>
            Our Premium Collection
        </div>
        <div className='category'>
            
        <a href='/#'style={{ width: '150px', left: '130px',color:'#F86338' ,marginRight:'80px'}}>All Products</a>
            <a href='/#' style={{ width: '179px', left: '340px',color:'#9A9AB0',marginRight:'80px' }}>Coats & jacket</a>
            <a href='/#' style={{ width: '97px', left: '599px',color:'#9A9AB0',marginRight:'80px' }}>Dressed</a>
            <a href='/#' style={{ width: '93px', left: '776px',color:'#9A9AB0',marginRight:'80px' }}>Playsuit</a>
            <a href='/#' style={{ width: '64px', left: '949px',color:'#9A9AB0' ,marginRight:'80px'}}>Short</a>
            <a href='/#' style={{ width: '55px', left: '1093px',color:'#9A9AB0',marginRight:'80px' }}>Skirt</a>
            <a href='/#' style={{ width: '82px', left: '1228x',color:'#9A9AB0',marginRight:'80px' }}>T-shirt</a>
          



        </div>

      
    </div>
 
    <ProdList/>
    
    <Footer/>
    
      </>
  )
}

export default Categorieshop

