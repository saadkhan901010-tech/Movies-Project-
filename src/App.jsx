import { Star } from 'lucide-react'
import SearchBar from './Components/Search_Bar.jsx' 
import React, { useEffect, useState } from 'react'

const App = () => {
  const [Movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('') // 1. State for the search term

  const fetchMovies = async () => {
 
      const response = await fetch("https://api.tvmaze.com/shows")
  const data = await response.json()
      setMovies(data)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  
  const filteredMovies = Movies.filter((movie) => movie?.name?.toLowerCase().includes(searchTerm.toLowerCase() ))

  


  return (
    // OVERALL CONTAINER
    <div className="w-full min-h-screen bg-slate-900 p-8">
  
      {/* SEARCH BAR with spacing */}
      <div className="mb-8 max-w-2xl mx-auto">
        {/* Pass state and setter function as PROPS */}
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
      </div>

      {/* HEADER */}
      <div className='flex justify-center text-3xl font-extrabold text-white mb-8 tracking-wider'>
        <h1>THE BEST MOVIES</h1>
      </div>

      {filteredMovies.length === 0 && Movies.length > 0 && (
        <p className="text-white text-center text-xl mt-10">
          No movies found matching "{searchTerm}"
        </p>
      )}

      {/* GRID CONTAINER: RENDER filteredMovies */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        
        {/* 3. Map over the filteredMovies list */}
        {filteredMovies.map((movie) => ( 
          <div
            key={movie.id}
            className="bg-slate-800 p-4 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer group"
          >
            
            {/* IMAGE SECTION (Full Width) */}
            <div className="relative">
              <img
                src={movie.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}
                alt={movie.name}
                className="w-full h-50 object-cover rounded-md group-hover:opacity-90 transition-opacity"
              />
          
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* TEXT CONTENT SECTION */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-white truncate mb-1">
                {movie.name}
              </h3>

              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-yellow-400 font-medium text-sm">
                  <Star className="w-4 h-4 fill-current" /> 
                  <span>{movie.rating?.average || "N/A"}</span>
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default App