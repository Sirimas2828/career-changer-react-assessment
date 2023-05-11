import './style.css';

const Navbar = () => {
    return (
        <>
        <div>
            <ul className="navbar">
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/Owner'}>Owner</a></li>
        
            </ul>
            <hr />
        </div>
        </>
    )
}

export default Navbar