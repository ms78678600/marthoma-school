import { Link } from "react-router-dom";
//import useLogout from "./hooks/useLogout";

const ATopbar = () => {

  //const logout = useLogout()
  
  return (
    
    <>
    <div className="bg-blue-900 text-white text-sm px-4 py-2 flex justify-between items-center">
      <div>
        <p>Kuriannoor PO 689553, Pathanamthitta</p>
      </div>
      <div>
        <p>📞 0479 2337536 | ✉️ marthomakuriannoor@gmail.com</p>
      </div>
    </div>
    <div>
      <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and School Info */}
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gray-300 flex items-center justify-center rounded">
            <span className="text-sm font-medium">Logo</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900 leading-tight">
              Mar Thomas High School Kuriannoor
            </h1>
            <p className="text-xs text-gray-600 uppercase tracking-wider">
              Kerala Board of Higher Secondary Education
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-medium text-sm text-black">
          <Link to="/">HOME</Link>
          <Link to="/learning">LEARNING</Link>
          <Link to="/sports">SPORTS</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/events">EVENT</Link>
          <Link to="/career">CAREER</Link>
          <Link to="/faculty">FACULTY</Link>
          <Link to="/contact">CONTACT US</Link>
        </div>
        <button className="text text-sm font-bold text-white bg-red-500 m-1 p-2 rounded-lg hover:bg-red-600 transition"
          >Log Out</button>
      </div>
    </nav>
    </div>
    </>
  );
};
export default ATopbar;
