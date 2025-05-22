import { ApertureIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full bg-green-950 flex place-content-between text-white p-4">
      <div className="object-left">
        <Link to="/home" className="hover:cursor-pointer">
          <ApertureIcon size={48} />
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button type="button">Início</button>
        <button type="button">Serviços</button>
        <button type="button">Contato</button>
      </div>
    </div>
  );
}

export default Navbar;
