import { useDispatch } from "react-redux"
import FooterPokeball from "../components/layout/FooterPokeball"
import { loginTrainer } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameTrainer = e.target.nameTrainer.value
        dispatch(loginTrainer(nameTrainer));
        navigate("/pokedex")
    }

    return (
        <main className="main min-h-screen grid grid-rows-[1fr_auto]">
            <section>

                <article className="text-center my-6 mx-auto w-[min(90%,_650px)]">
                    <div className="mb-[2rem]">
                        <img src="/images/pokedex.png" alt="" />
                    </div>
                    <h2 className="poke-hi mb-[1rem] font-mb text-red-600 text-[36px]">Hello trainer!</h2>
                    <p className="poke mb-[1rem]">To start, give your name.</p>
                    <form className="text-center " onSubmit={handleSubmit}>
                        <input 
                            className="input-name p-1 shadow-[0_0_5px_0px_rgba(0,0,0,0.75)]"
                            autoComplete="off" 
                            placeholder="Your name..." 
                            id="nameTrainer" 
                            type="text"
                            required 
                        />
                        <button className="p-1 w-[100px] bg-red-500 shadow-[0_0_5px_0px_rgba(0,0,0,0.75)]">Start!</button>
                    </form>
                </article>

            </section>
            <FooterPokeball />
        </main>
    )
}

export default Home
