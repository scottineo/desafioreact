import { ApertureIcon } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }
  return (
    <div className="w-full bg-green-950 flex place-content-between text-white p-4">
      <div className="object-left">
        <Link to="/home" className="hover:cursor-pointer">
          <ApertureIcon size={48} />
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Link to="/home" className="text-2xl font-bold">
          Início
        </Link>
        <button type="button">Serviços</button>
        <Link to="/login" className="text-2xl font-bold">
          Login
        </Link>
        <Link to="" onClick={logout} className="hover:underline">
          Sair
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
