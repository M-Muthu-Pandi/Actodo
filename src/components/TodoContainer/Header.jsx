import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const data = useLocation();
    const navigate = useNavigate();

    const logOut = ()=> {
        navigate('/');
    }

    return (
        <header className="sm:flex justify-between items-center">
            <div className='mb-2 sm:mb-0'>
                <h1 className="text-3xl font-medium">Hello {data.state.user}!</h1>
                <p>I help you manage your activities:)</p>
            </div>
            <button onClick={logOut} className="bg-[#FD6663] font-medium w-24 p-1 rounded-md">Log Out</button>
        </header>
    )
}

export default Header;