import usePokemon from "../hooks/usePokemon";
import { useContext } from "react";

export const Error = () => { 

<<<<<<< HEAD
  const { error, alerta } = usePokemon();
=======
  const { alerta  } = usePokemon();
>>>>>>> 5c6e8c13e3476e2112a0b6044b53cb59b3fa09c7

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
