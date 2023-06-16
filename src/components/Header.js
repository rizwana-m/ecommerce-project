import React from 'react';
import Heading from './Heading';
import Hero from './Hero';
import Categorieshop from './Categorieshop';
import ProdList from './ProdList';


const Header = () => {
    return (
        <>
        <div className='container-fluid'>
            <header className="text-gray-600 body-font shadow-lg sticky">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href='/#' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl navbar-brand" >Dealerz.</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href='/#' className="mr-5 hover:text-gray-900"><i className="bi bi-telephone"></i>Call center</a>
                        <a href='/#' className="mr-5 hover:text-gray-900"><i className="bi bi-truck"></i>Shipping& Returns</a>

                    </nav>

                </div>

            </header>
        

        </div>
        <Heading/>
        <Hero/>
        <Categorieshop/>
          <ProdList/>
     
        </>

    )
};
export default Header