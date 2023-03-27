
import Logo from "./Images/Logo.png";
import { AppRoutes } from "./Routes/AppRoutes";
import { BrowserRouter, Routes, Route, Link, Router, Outlet, useLocation, NavLink } from "react-router-dom";

function Header() {

 const location = useLocation();

  return (
    <>
      {/* <AppRoutes /> */}
    <header className="bg-paleta-AzulOscuro">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8">
     
     
       
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-12 w-12 mr-2" src={Logo} alt="Placeholder" />
                <h1 className="text-white font-bold text-lg">ContApp</h1>
              </div>
            </Link>
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-start max-w:96">
              <div className=" w-full lg:max-w-5xl">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full  border border-transparent rounded-md py-2 pl-10 pr-3 text-base placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 "
                    placeholder="Buscar"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center lg:hidden ">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          
          
            <div className="hidden lg:block lg:ml-4 ">
              <div className="flex space-x-4">
              
              <NavLink className={(args) =>`${args.isActive ? 'text-white  hover:text-white px-3 py-2 rounded-md text-lg font-medium bg-gray-700':
                  "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"}`} to="/" >
                
                  Página 1
                </NavLink>
                <NavLink className={(args) =>`${args.isActive ? 'text-white  hover:text-white px-3 py-2 rounded-md text-lg font-medium bg-gray-700':
                  "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"}`} to="/Pagina2" >
                
                  Página 2
                </NavLink>

                <Link
                  to="/Pagina2"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Pagina 2
                </Link>
              </div>
            </div>
          </div>
    
      </nav>
      
    </header>
   {/* <Outlet /> */}
    </>
  );
}

export default Header;
