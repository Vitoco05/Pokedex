import { useEffect, useState } from "react"
import { bgStylePokemonType, borderStyledPokemonByType, getPokemonByUrl, joinPokemonTypes, textColorPokemonByType } from "../../services/pokemons"
import StatsList from "./StatsList"
import { Link } from "react-router-dom"

const PokemonCard = ({ pokemonUrl }) => {

    const [pokemonInfo, setPokemonInfo] = useState(null)

    

    useEffect(() => {
        getPokemonByUrl(pokemonUrl)
        .then((data) => setPokemonInfo(data))
        .catch((error) => console.error(error))
    }, [])

    return (
        <Link
          to={`/pokedex/${pokemonInfo?.id}`}
            className={`max-w-[320px] text-center capitalize bg-[#e6e6e6] border-[5px] rounded-md 
            ${borderStyledPokemonByType[pokemonInfo?.type[0]]}`}
        >

            <header className={`h-[90px] relative mb-8 ${bgStylePokemonType[pokemonInfo?.type[0]]}`}>
                <div className="absolute left-1/2 -translate-x-1/2 translate-y-6 -bottom-4 h-[100px] aspect-square">
                    <img className="h-full w-full object-contain" src={pokemonInfo?.image} alt="" />
                </div>
            </header>

            <section>
                <h3 className={`text-4xl ${textColorPokemonByType[pokemonInfo?.type[0]]}`}>{pokemonInfo?.name}</h3>
                <h4>{joinPokemonTypes(pokemonInfo?.type)}</h4>
                <h5 className={`text-sm mb-2 ${textColorPokemonByType[pokemonInfo?.type[0]]}`}>Types</h5>
                <hr />
                <StatsList pokemonInfo={pokemonInfo} stats={pokemonInfo?.stats} />
            </section>

        </Link>
    )
}

export default PokemonCard
