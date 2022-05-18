import usePokemon from "../hooks/usePokemon";
import { useContext } from "react";

export const Error = () => { 

  const { error, alerta } = usePokemon();

  return (
    <div className="mt-10 w-10/12 h-56 shadow flex flex-col items-center rounded-b-lg mx-auto max-w-6xl">
        <div className="h-1/6 text-white mx-auto my-auto bg-red-500 w-full flex justify-center items-center rounded-t-lg">
            Error
        </div>
        <div className="h-5/6 bg-white my-auto w-full flex justify-center  items-center align-middle rounded-b-lg">
            { alerta }
        </div>
    </div>
  )
}
