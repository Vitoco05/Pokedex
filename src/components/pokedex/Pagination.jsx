const FIRST_PAGE = 1

const Pagination = ({lastPage, pagesInCurrentBlock, setCurrentPage, currentPage}) => {

    const handleNextPage = () => {
        setCurrentPage((prevState) => {
            const nextPage = prevState + 1
            if(nextPage <= lastPage) return nextPage
            return prevState
        })
    }

    const handleLastPage = () => setCurrentPage(lastPage)

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => {
            const newPage = prevPage - 1
            if(newPage >= FIRST_PAGE) return newPage
            return prevPage
        })
    }

    const handleFirstPage = () => setCurrentPage(FIRST_PAGE)

    return (
        <ul className="flex justify-center text-center gap-5 px-4 my-[15px]">
            <li onClick={handleFirstPage}><i className="fa-solid fa-circle-arrow-left text-blue-600 cursor-pointer"></i></li>
            <li onClick={handlePreviousPage}><i className="fa-solid fa-circle-arrow-left text-red-600 cursor-pointer"></i></li>
            {
                pagesInCurrentBlock.map((page) => <li className={`cursor-pointer ${currentPage === page ? "text-white rounded-md bg-red-600 px-2" : ""}`} key={page} onClick={() => setCurrentPage(page)}>{page}</li>)
            }
            <li onClick={handleNextPage}><i className="fa-solid fa-circle-arrow-right text-red-600 cursor-pointer"></i></li>
            <li onClick={handleLastPage}><i className="fa-solid fa-circle-arrow-right text-blue-600 cursor-pointer"></i></li>
        </ul>
    )
}

export default Pagination
