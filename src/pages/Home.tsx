import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'
import List from '../components/List'
import Pagination from '../components/Pagination'
import { useNavigate } from 'react-router-dom'
import PokedexImg from '/assets/pokedex.png'

interface FilteredPokemon {
    name: string
    url: string
}

const Home = () => {
    const navigate = useNavigate()
    const [pokemons, setPokemons] = useState([])
    const [filteredPokemons, setFilteredPokemons] = useState<Array<any>>([])
    const [pageUrlCount, setPageUrlCount] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [query, setQuery] = useState<string>('')
    const [error, setError] = useState<string>('')

    useEffect(() => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon?offset=${
                    (currentPage - 1) * 20
                }&limit=20`
            )
            .then((res) => {
                setPageUrlCount(Math.ceil(res.data.count / 20))
                setPokemons(res.data.results)
                if (query) {
                    const filtered = res.data.results.filter(
                        (p: FilteredPokemon) => p.name.includes(query)
                    )
                    setFilteredPokemons(filtered)
                } else {
                    setFilteredPokemons([])
                }
            })
            .catch((e) => console.error(e))
    }, [currentPage, query])

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!e.target.value) {
            setQuery('')
            setError('You must enter a name')
        }
        await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.status)
                    navigate(`/${query}`)
                }
            })
            .catch((e) => {
                console.error(e)
                setError(
                    "This pokemon doesn't exist, make sure to check if u made a typo."
                )
            })
    }

    return (
        <div>
            <div className="flex justify-center py-4 ">
                <img src={PokedexImg} width={250} />
            </div>
            <form
                className="flex justify-center m-auto max-w-md"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    id="pokemonName"
                    placeholder="Search for a pokemon..."
                    className="w-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0a61cc] focus:shadow-md"
                    value={query}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setQuery(e.target.value.toLowerCase())
                    }
                />
                <input
                    className="hover:text-black appearance-none outline-none border-none cursor-pointer block p-2 bg-blue-500 text-white text-sm text-bold uppercase transition"
                    type="submit"
                />
            </form>

            <p className="error flex justify-center text-red-500">{error}</p>
            <List pokemons={query ? filteredPokemons : pokemons} />
            <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageUrlCount={pageUrlCount}
            />
        </div>
    )
}

export default Home
