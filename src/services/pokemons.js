import axios from "axios";

export const getAllPokemons = async () => {
    const URL ="https://pokeapi.co/api/v2/pokemon?limit=1281"
    const { data } = await axios.get(URL);
    return data.results;
}



export const getPokemonsByType = async (pokemonType) => {
    const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`

    const { data } = await axios.get(url);
    const formatPokemons = data.pokemon.map(({pokemon}) => pokemon)
    return formatPokemons;
}

export const getPokemonById = async (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    const { data } = await axios.get(url);
    const pokemon = {
        id: data.id,
        name: data.name,
        type: formatTypes(data.types),
        stats: formatStats(data.stats),
        image: data.sprites.versions["generation-v"]["black-white"].animated.front_default,
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        moves: data.moves
    }
    return pokemon;
}

export const getPokemonByUrl = async (pokemonUrl) => {
    const { data } = await axios.get(pokemonUrl);
    const pokemon = {
        id: data.id,
        name: data.name,
        type: formatTypes(data.types),
        stats: formatStats(data.stats),
        image: data.sprites.versions["generation-v"]["black-white"].animated.front_default,
    }
    return pokemon;
}

export const getAllTypes = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type")
    return data.results
}

const formatStats = (stats) => {
    return stats.map((stat) => ({name: stat.stat.name, value: stat.base_stat}))
}

const formatTypes = (types) => {
    return types.map((type) => type.type.name)
}

export const joinPokemonTypes = (types = []) => {
    return types.slice(0, 2).join(" / ")
}

const bgStylePokemonType = {
    "normal": "bg-gradient-to-b from-[#735259] to-[#BC6B7C]",
    "fighting": "bg-gradient-to-b from-[#96402A] to-[#F1613C]",
    "flying": "bg-gradient-to-b from-[#93B2C7] to-[#93B2B1]",
    "poison": "bg-gradient-to-b from-[#5B3184] to-[#A564E3]",
    "ground": "bg-gradient-to-b from-[#654008] to-[#895C14]",
    "rock": "bg-gradient-to-b from-[#7E7E7E] to-[#8D8D94]",
    "bug": "bg-gradient-to-b from-[#3BB039] to-[#62DB60]",
    "ghost": "bg-gradient-to-b from-[#323569] to-[#454AA8]",
    "steel": "bg-gradient-to-b from-[#5E736C] to-[#728881]",
    "fire": "bg-gradient-to-b from-[#E35825] to-[#E8AE1B]",
    "water": "bg-gradient-to-b from-[#133258] to-[#1479FB]",
    "grass": "bg-gradient-to-b from-[#7EC6C5] to-[#CAE099]",
    "electric": "bg-gradient-to-b from-[#0C1395] to-[#2B319B]",
    "psychic": "bg-gradient-to-b from-[#F71C90] to-[#AC2A6A]",
    "ice": "bg-gradient-to-b from-[#6FBEDF] to-[#64CBF5]",
    "dragon": "bg-gradient-to-b from-[#60CCD9] to-[#458B95]",
    "dark": "bg-gradient-to-b from-[#030706] to-[#0D1211]",
    "shadow": "bg-gradient-to-b from-[#301645] to-[#463A55]",
    "fairy": "bg-gradient-to-b from-[#EB1269] to-[#EB1231]",
    "unknown": "bg-gradient-to-b from-[#35433E] to-[#45665B]",
}

const bgTextColorPokemonByType = {
    "normal": "bg-[#735259]",
    "fighting": "bg-[#96402A]",
    "flying": "bg-[#93B2C7]",
    "poison": "bg-[#5B3184]",
    "ground": "bg-[#654008]",
    "rock": "bg-[#7E7E7E]",
    "bug": "bg-[#3BB039]",
    "ghost": "bg-[#323569]",
    "steel": "bg-[#5E736C]",
    "fire": "bg-[#E35825]",
    "water": "bg-[#133258]",
    "grass": "bg-[#7EC6C5]",
    "electric": "bg-[#0C1395]",
    "psychic": "bg-[#F71C90]",
    "ice": "bg-[#6FBEDF]",
    "dragon": "bg-[#60CCD9]",
    "dark": "bg-[#030706]",
    "shadow": "bg-[#301645]",
    "fairy": "bg-[#EB1269]",
    "unknown": "bg-[#35433E]",
}

const borderStyledPokemonByType = {
    "normal": "border-[5px] border-[#735259]",
    "fighting": "border-[5px] border-[#96402A]",
    "flying": "border-[5px] border-[#93B2C7]",
    "poison": "border-[5px] border-[#5B3184]",
    "ground": "border-[5px] border-[#654008]",
    "rock": "border-[5px] border-[#7E7E7E]",
    "bug": "border-[5px] border-[#3BB039]",
    "ghost": "border-[5px] border-[#323569]",
    "steel": "border-[5px] border-[#5E736C]",
    "fire": "border-[5px] border-[#E35825]",
    "water": "border-[5px] border-[#133258]",
    "grass": "border-[5px] border-[#7EC6C5]",
    "electric": "border-[5px] border-[#0C1395]",
    "psychic": "border-[5px] border-[#F71C90]",
    "ice": "border-[5px] border-[#6FBEDF]",
    "dragon": "border-[5px] border-[#60CCD9]",
    "dark": "border-[5px] border-[#030706]",
    "shadow": "border-[5px] border-[#301645]",
    "fairy": "border-[5px] border-[#EB1269]",
    "unknown": "border-[5px] border-[#35433E]",
}

const textColorPokemonByType = {
    "normal": "text-[#735259]",
    "fighting": "text-[#96402A]",
    "flying": "text-[#93B2C7]",
    "poison": "text-[#5B3184]",
    "ground": "text-[#654008]",
    "rock": "text-[#7E7E7E]",
    "bug": "text-[#3BB039]",
    "ghost": "text-[#323569]",
    "steel": "text-[#5E736C]",
    "fire": "text-[#E35825]",
    "water": "text-[#133258]",
    "grass": "text-[#7EC6C5]",
    "electric": "text-[#0C1395]",
    "psychic": "text-[#F71C90]",
    "ice": "text-[#6FBEDF]",
    "dragon": "text-[#60CCD9]",
    "dark": "text-[#030706]",
    "shadow": "text-[#301645]",
    "fairy": "text-[#EB1269]",
    "unknown": "text-[#35433E]",
}

export {
    bgStylePokemonType,
    borderStyledPokemonByType,
    textColorPokemonByType,
    bgTextColorPokemonByType
}