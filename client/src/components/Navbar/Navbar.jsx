import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GlobalContext } from "../../Context";
import { FaArrowLeftLong } from "react-icons/fa6";
const Navbar = () => {
  const { addToCart } = useContext(GlobalContext);

  return (
    <div>
      <nav className="navbar bg-warning">
        <Link className="navbar-brand ml-4" to={"/"}>
          <FaArrowLeftLong size={25} />
        </Link>
        <Link className="navbar-brand ml-auto mr-4" to={"/cart"}>
          <IoCartOutline size={30} />
          {addToCart.length}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
