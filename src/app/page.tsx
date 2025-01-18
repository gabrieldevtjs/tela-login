import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
    <main className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center mx-auto">
      {/* Login Section */}
      <section className="w-full flex-1 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-xl flex justify-center items-center flex-col gap-4">
          <img 
            src="./assets/user.png" 
            alt="Logo do usuario"
            className="w-36 hover:scale-110 duration-300"
          />
          <h1 className="text-4xl font-bold mb-7">Login</h1>

          <input 
            type="text" 
            placeholder="Digite o seu email..."
            className="w-full p-2 rounded-lg outline-none bg-gray-100 focus:bg-white"
          />

          <input 
            type="password" 
            placeholder="************"
            className="w-full p-2 rounded-lg outline-none bg-gray-100 focus:bg-white"
          />

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="font-medium">Lembrar senha</label>
            </div>

            <a href="#" className="text-sky-600 hover:text-sky-500 duration-200">Esqueceu a senha?</a>
          </div>

          <button className="w-full bg-blue-600 p-2 rounded-lg text-white text-lg font-medium hover:bg-blue-500 duration-200">
            Acessar
          </button>

          <p>
            Não possui uma conta?{' '}
            <a href="#" className="font-medium text-sky-600 hover:text-sky-500 duration-200">Criar uma conta</a>
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section 
        className="hidden md:flex gap-9 w-full flex-1 bg-blue-600 h-screen items-center justify-center flex-col p-4"
      >
        <h1 className="text-white text-2xl text-center max-w-lg lg:text-4xl">
          Domine as <strong>tecnologias mais buscadas</strong> pelo mercado!
        </h1>

        <img
          src="assets/techs.png"
          alt="Tecnologias usadas no mercado"
          className="w-3/4 lg:w-full lg:max-w-md"
        />
      </section>
    </main>
  </div>
  )

}
