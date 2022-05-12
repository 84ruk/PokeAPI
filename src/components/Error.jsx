import usePokemon from "../hooks/usePokemon";
import { useContext } from "react";

export const Error = () => { 

  const { error, alerta } = usePokemon();

  return (
    <div className="mt-10 w-full h-56 shadow flex flex-col items-center rounded-b-lg">
        <div className="h-1/6 text-white mx-auto my-auto bg-red-500 w-full flex justify-center  items-center rounded-t-lg">
            Error
        </div>
        <div className="h-5/6 bg-white my-auto w-full flex justify-center  items-center align-middle rounded-b-lg">
            { alerta }
        </div>
    </div>
  )
}
