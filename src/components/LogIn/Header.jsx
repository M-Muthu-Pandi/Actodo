
const Header = (props) => {
    const ruser = props.ruser;

    return (
        <header className='pb-1'>
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser ? <p>I help you manage your activities after you login :)</p> : <p className='text-red-500'>Please Sign Up Before you Login</p>}
        </header>
    )
}

export default Header;