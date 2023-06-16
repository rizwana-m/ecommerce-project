
import React from 'react'
// import { Link } from 'react-router-dom'

const Heading = () => {
  return (

< div className="subnavbar bg-light  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
        <nav className="navbar-nav md:ml-auto flex flex-wrap items-center text-base justify-center  sticky-top bg-body-tertiary">
            <a  href='/#' className="mr-5 hover:text-gray-900">Shop</a>
            <a href='/#' className="mr-5 hover:text-gray-900">Promo</a>
            <a href='/#' className="mr-5 hover:text-gray-900">About</a>
            <a href='/#' className="mr-5 hover:text-gray-900">Blog</a>
            <form className="d-flex" role='search'>

                <input className="form-control me-2" type="search" placeholder="Search what you  need" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                    <i className="bi bi-search"></i></button>
            </form>

            <div className="navbar-nav flex-row p-5 flex-wrap ms-md-auto ">
                <div className="nav-item col-6 md:mb-0">
                    <i className="bi bi-heart"></i>
                </div>
            </div>
          
            <div class="navbar-nav flex-row p-4 flex-wrap ms-md-auto ">
                <div class="nav-item col-6 md:mb-0">
                    <i className="bi bi-cart"></i>
                </div>
            </div>
           
            <div class="navbar-nav flex-row p-3 flex-wrap ms-md-auto ">
                <div class="nav-item col-6 md:mb-0">
                    <i className="bi bi-person"></i>
                </div>
            </div>
            <div class="navbar-nav flex-row p-2 flex-wrap ms-md-auto ">
                <div class="nav-item col-6 md:mb-0">
                    <i className="bi bi-bell"></i>
                </div>
            </div>
          
        </nav>                                     
   

   
    
</div>



  )
}

export default Heading


