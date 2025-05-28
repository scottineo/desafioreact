function FaleConosco() {
  return (
    <div className="flex flex-col mx-auto items-center p-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Fale Conosco</h2>
      <div className="bg-gray-100 p-8">
        <form>
          <label className="block text-gray-700 mb-2" htmlFor="nome">
            Nome
          </label>
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="nome"
          />
          <label className="block text-gray-700 mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="email"
          />
          <label className="block text-gray-700 mb-2" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            placeholder="Digite sua mensagem"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="mensagem"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-green-950 text-white p-2 rounded hover:bg-green-800 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FaleConosco;
