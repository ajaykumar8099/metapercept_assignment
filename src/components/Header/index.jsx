import "./index.css"

const Header = () => (
    <nav className="nav-bar">
        <p className="nav-title">
            Title
        </p>
        <div className="nav-sub-items">
            <ul className="nav-items-container">
                <li className="nav-items">Home</li>
                <li className="nav-items">About</li>
                <li className="nav-items">Blog</li>
                <li className="nav-items">Contact</li>
            </ul>
            <div>
                <button type="button" className="nav-button">
                    Button
                </button>
            </div>
        </div>
    </nav>

)
export default Header