import usePokemon from '../hooks/usePokemon';

export const Search = () => {

  const { handleInputChange, handleSubmit, name } = usePokemon();

  return (
    <form 
    onSubmit={handleSubmit} 
    className="flex self-center relative text-gray-600 focus-within:text-gray-400"
  >
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
          </span>
          <input 
              type="text"
              value={name}
              onChange={
                handleInputChange
              }
              className="py-2 h-10 text-sm bg-gray-100 rounded-full px-4 border-none focus:outline-none placeholder:text-gray-500 pl-10 focus:bg-gray-200 focus:text-gray-900 w-full md:w-96" placeholder="Busca un Pokemon..." 
              autoComplete="off"
              name='name'
          />
  </form>
  )
}
