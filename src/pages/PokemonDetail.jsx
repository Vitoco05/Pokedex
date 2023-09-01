import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { bgStylePokemonType, bgTextColorPokemonByType, getPokemonById, joinPokemonTypes, textColorPokemonByType,} from "../services/pokemons"
import StatBarList from "../components/pokemonDetail/StatBarList"

const PokemonDetail = () => {

    const [pokemonData, setPokemonData] = useState(null)

    const { pokemonId } = useParams() 

    useEffect(() => {
        getPokemonById(pokemonId)
        .then((data) => setPokemonData(data))
        .catch((error) => console.error(error))
    }, [])

    return (
        <main className="flex justify-center items-center">

             <article className="my-6 shadow-[0_3px_10px_4px_rgba(0,0,0,0.75)] w-[min(100%,_500px)]"> 
                <header className={`relative h-[90px] mb-8 ${bgStylePokemonType[pokemonData?.type[0]]}`}>
                    <div className="absolute h-[80px] left-1/2 translate-y-8 -translate-x-1/2">
                        <img className="h-full w-full object-contain" src={pokemonData?.image} />
                    </div>
                </header>
                <section className="text-center font-medium capitalize px-4 pb-4">
                    <span className={`text-2xl ${textColorPokemonByType[pokemonData?.type[0]]}`}>#{pokemonData?.id}</span>
                    <h3 className={`text-4xl capitalize ${textColorPokemonByType[pokemonData?.type[0]]}`}>{pokemonData?.name}</h3>
                    <div className="flex items-center justify-between">

                 

                        <div>
                            <p><span className="text-slate-500">Weight:</span> {pokemonData?.weight}</p>
                            <p><span className="text-slate-500">Height:</span> {pokemonData?.height}</p>
                        </div>
                     
                        <div>
                            <h3>Type</h3>
                            <p className={`text-white ${bgTextColorPokemonByType[pokemonData?.type[0]]}`}>{joinPokemonTypes(pokemonData?.type)}</p>
                        </div>
                        
                    </div>

                    <StatBarList stats={pokemonData?.stats}/>
                </section>
             </article>

        </main>
    )
}

// {joinPokemonTypes(pokemonData?.type)}

export default PokemonDetail
