

export function Login() {
  return (
    <div className="flex flex-col justify-center sm:px-6 p-4 lg:basis-4/12 sm:rounded-r-xl text-center bg-base-100">
      <h2 className="mb-4 ">LOGIN</h2>
      <div className="min-h-[170px] flex flex-col gap-6">
        <input
          type="text"
          placeholder="Login"
          className="input input-bordered input-secondary"
        />
        <input
          type="password"
          placeholder="Senha"
          className="input input-bordered input-secondary"
        />
        <div className="flex justify-between">
        <button className=" text-accent flex-initial w-64 flex-1 mr-5 hover:underline">Cadastrar-se</button>
        <button className="btn btn-secondary flex-3 ml-5">Entrar</button>
        </div>
      </div>
    </div>
  );
}
