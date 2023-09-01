const FooterPokeball = () => {
    return (
        <section>
            <div className="h-20 bg-red-600"></div>
            <div className="h-16 bg-black relative">
                <div className="h-16 aspect-square rounded-full bg-white absolute 
                left-1/2 -top-8 -translate-x-1/2 border-[8px] border-black after:block 
                after:content-[''] after:h-8 after:aspect-square after:bg-slate-600 
                after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 
                after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black"></div>
            </div>
        </section>
    )
}

export default FooterPokeball
