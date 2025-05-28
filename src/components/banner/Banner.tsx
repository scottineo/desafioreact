function Banner() {
  return (
    <div className="w-full bg-(--back) text-white flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-xl">Bem-vinde à Aperture</h1>
      <p>Aqui o seu ponto de vista é válioso.</p>
      <button
        type="button"
        className="bg-(--secondary) border-(--tertiary) border-2 rounded-md p-2 mt-4 hover:bg-(--tertiary) hover:text-(--secundary)"
      >
        Explore nossos serviços
      </button>
    </div>
  );
}

export default Banner;
