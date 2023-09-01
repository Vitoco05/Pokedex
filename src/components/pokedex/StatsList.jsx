import { textColorPokemonByType } from "../../services/pokemons"

const StatsList = ({ stats, pokemonInfo }) => {
    return ( 
        <ul className="grid gap-2 grid-cols-2 text-xs p-2">
            {
                stats?.map((stat) => <li key={stat.name}>
                    <h4 className="text-sm line-clamp-1">{stat.name}</h4>
                    <span className={`text-lg font-bold ${textColorPokemonByType[pokemonInfo?.type[0]]}`}>{stat.value}</span>
                </li>)
            }
        </ul>
    )
}

export default StatsList
