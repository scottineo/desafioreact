import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

function ListPassagens() {
  const navigate = useNavigate();
  const [passagens, setPassagens] = useState([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPassagens() {
    try {
      await buscar("/passagens", setPassagens, {
        headers: { Authorization: token },
      });
    } catch (error) {
      console.error("Erro ao buscar passagens:", error);
    }

    return (
      <>
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col mx-2">
            <div
              className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {passagens.map((passagem) => (
                <CardPassagem key={passagem.id} passagem={passagem} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
