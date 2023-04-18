import Navbar from './Navbar'
import './style.css'


const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout