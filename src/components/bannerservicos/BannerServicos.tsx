function BannerServicos() {
  return (
    <div className="flex justify-center w-full bg-green-950 text-white p-4">
      <div className="container flex flex-col mx-2">
        <h2 className="text-xl font-semibold mb-4">Serviços disponíveis</h2>
        <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Serviço 1</h3>
            <p>Descrição do serviço 1.</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Serviço 2</h3>
            <p>Descrição do serviço 2.</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Serviço 3</h3>
            <p>Descrição do serviço 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerServicos;
