import "./Navbar.scss"

function Navbar () {
    return (
        <nav className="navbar">
            <h1>AC Market</h1>
            <div className="search">
                <input type="search" placeholder="Buscar" />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="30" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </div>
            <button className="btn-update" onClick={() => window.location.reload()}>Actualizar</button>
        </nav>

    )
}

export default Navbar