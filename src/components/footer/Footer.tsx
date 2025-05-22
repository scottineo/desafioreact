function Footer() {
  return (
    <>
      <footer className="w-full bg-green-950 text-white p-4 ">
        <div className="flex justify-between gap-4 p-2">
          <div className="container flex flex-col gap-4">
            <h2>Sobre</h2>
            <p>Oferecemos soluções inovadoras para negócios modernos.</p>
          </div>
          <div className="container flex flex-col gap-4 text-center">
            <h2 className="font-semibold">Links Rápidos</h2>
            <p className="">Início</p>
            <p>Serviços</p>
            <p>Contato</p>
          </div>
          <div className="container flex flex-col gap-4 text-center">
            <h2 className="font-semibold">Legal</h2>
            <p>Política de Privacidade</p>
            <p>Termos de Serviço</p>
          </div>
          <div className="container flex flex-col gap-4 text-center">
            <h2 className="font-semibold">Conecte-se</h2>
            <p>X</p>
            <p>Linkedin</p>
          </div>
        </div>
        <p className="text-center text-xs font-thin m-1">
          2025. Aperture. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}

export default Footer;
