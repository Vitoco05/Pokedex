import { Link } from "react-router-dom"
import { logout } from "../../store/slices/trainer.slice"
import { useDispatch } from "react-redux"

const HeaderPokeball = ({children}) => {

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <section>
      <header>
      <div className="h-16 bg-red-600 relative">
        <Link to={'/pokedex'} className="absolute cursor-pointer ml-4 left-0 bottom-0 w-[210px] sm:w-[300px]">
          <img src="/images/pokedex.png" alt="" />
        </Link>
      </div>
            <div className="h-8 bg-black relative">
                <button onClick={handleLogOut} className="h-16 aspect-square rounded-full bg-white absolute 
                right-0 -top-8 -translate-x-1/2 translate-y-1/4 border-[8px] border-black after:block 
                after:content-[''] after:h-8 after:aspect-square after:bg-slate-600 
                after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 
                after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black
                transition-colors hover:bg-yellow-300 cursor-pointer">
                </button>
            </div>
      </header>
      {children}
    </section>
  )
}

export default HeaderPokeball
