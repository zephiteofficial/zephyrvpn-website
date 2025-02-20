import { Outlet, Link } from 'react-router-dom';

export default function Nav(){
    return (
    <>
        <nav className="bg-background outline-2 outline-foreground text-foreground p-4 flex w-full top-0 z-50">
        <div className="container mx-auto min-h-16 flex justify-between items-center">
          <div className="group text-4xl transition-all font-normal">
            <p className='inline group-hover:text-primary group-hover:cursor-none ease-in duration-200'>
                Z
            </p>
            <p className='opacity-0 group-hover:opacity-100 group-hover:cursor-none transition-opacity ease-in duration-200 inline text-lg'>
                EPHYR
            </p>
            </div>
          <ul className="flex space-x-6">
            <li className="group">
              <Link to="/" className="relative">
                Home
                <span className="absolute left-0 top-6 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group">
              <Link to="/about" className="relative">
                About
                <span className="absolute left-0 top-6 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group">
              <Link to="/plans" className="relative">
                Plans
                <span className="absolute left-0 top-6 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="group">
              <Link to="/contact" className="relative">
                Contact
                <span className="absolute left-0 top-6 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
    )
}