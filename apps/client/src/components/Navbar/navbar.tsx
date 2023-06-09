import "./style.css";

export const NavBar = () => {
    return (
        
        <header>
        <nav className="nav_container">
            <div className="mobile_menu" id="mobile_menu">
                <div id="linha1"></div>
                <div id="linha2"></div>
                <div id="linha3"></div>
            </div>
            <ul className="nav_list" id="nave_list">
                <li id="item_list"><a className="item_list"  href="/">Início</a></li>
                <li id="item_list"><a className="item_list"  href="/">Sobre</a></li>
                <li id="item_list"><a className="item_list" href="/">Projetos</a></li>
                <li id="item_list"><a className="item_list"  href="/">Habilidades</a></li>
                <li id="item_list"><a className="item_list"  href="/">Contatos</a></li>
            </ul>
        </nav>
    </header>
)
}