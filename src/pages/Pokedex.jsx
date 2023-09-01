import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAllPokemons, getPokemonsByType } from "../services/pokemons"
import PokemonList from "../components/pokedex/PokemonList"
import { paginateData } from "../utils/pagination"
import Pagination from "../components/pokedex/Pagination"

const Pokedex = () => {
    const [pokemons, setPokemons] =useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonType, setPokemonType] = useState("")

    const [currentPage, setCurrentPage] = useState(1)


    const { name } = useSelector((store) => store.trainer)

    const pokemonsByName = pokemons.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );


    const handleChange = (setState) => (e) => {
        setState(e.target.value)
    }

    useEffect(() => {
        if(!pokemonType) {
            getAllPokemons()
            .then((data) => setPokemons(data))
            .catch((error) => console.error(error))
        }
    }, [pokemonType])

    useEffect(() => {
        if(pokemonType) {
            getPokemonsByType(pokemonType).then((data) => setPokemons(data))
        }
    }, [pokemonType])

    const { itemsInCurrentPage, lastPage, pagesInCurrentBlock} = paginateData(pokemonsByName, currentPage)

    return (
        <main>
            <section className="px-4">
                <p className="py-4 text-[18px]"><span className="text-red-500">Welcome {name},</span> here you could find your favorite pokemon.</p>
                <form>
                    <div className="py-2">
                        <input 
                            className="p-3 w-[250px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.75)]"
                            value={pokemonName}
                            onChange={handleChange(setPokemonName)} 
                            placeholder="Search pokemon ..." 
                            type="text" />
                    </div>

                    <select
                        className="py-3 px-2 w-[250px] mb-[20px] mt-[10px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.75)]" 
                        value={pokemonType} 
                        onChange={handleChange(setPokemonType)}>
                        <option value="">All pokemons</option>
                        <option value="normal">Normal</option>
                        <option value="fighting">Fighting</option>
                        <option value="flying">Flying</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="rock">Rock</option>
                        <option value="bug">Bug</option>
                        <option value="ghost">Ghost</option>
                        <option value="steel">Steel</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                        <option value="electric">Electric</option>
                        <option value="psychic">Psychic</option>
                        <option value="ice">Ice</option>
                        <option value="dragon">Dragon</option>
                        <option value="dark">Dark</option>
                        <option value="shadow">Shadow</option>
                        <option value="fairy">Fairy</option>
                        <option value="unknown">unknown</option>
                    </select>
                </form>
            </section>

            <Pagination 
            setCurrentPage={setCurrentPage} 
            lastPage={lastPage} 
            pagesInCurrentBlock={pagesInCurrentBlock} 
            currentPage={currentPage}
            />

            <PokemonList pokemons={itemsInCurrentPage}/>

            <Pagination  
            setCurrentPage={setCurrentPage} 
            lastPage={lastPage} 
            pagesInCurrentBlock={pagesInCurrentBlock} 
            currentPage={currentPage}/>
        </main>
    )
}

export default Pokedex
