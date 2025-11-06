import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigateTo = useNavigate();

  const menuItems = [
    { name: "Home", page: "" },
    { name: "Services", page: "services" },
    { name: "About", page: "about" },
    { name: "Our Team", page: "team" },
    { name: "Contact", page: "contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1
          onClick={() => navigateTo("/")}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
        >
          <img className="h-[100px]" src={Logo} alt="" />
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigateTo(`/${item.page}`)}
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-3 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                navigateTo(`/${item.page}`);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
