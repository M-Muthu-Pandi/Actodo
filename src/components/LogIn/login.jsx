import { Link } from 'react-router-dom';

const Login = (props) => {
    const handleUinput = props.handleUinput;
    const handlePinput = props.handlePinput;
    const checkUser = props.checkUser;

    return (
        <section className="flex flex-col gap-2 my-2">
            <input onChange={handleUinput} type="text" placeholder="User Name" className="w-52 border border-black p-1 rounded-md bg-transparent" />
            <input onChange={handlePinput} type="text" placeholder="Password" className="w-52 border border-black p-1 rounded-md bg-transparent" />
            <button onClick={checkUser} className="bg-[#8272da] font-medium w-24 p-1 rounded-md">Log In</button>

            <p className='sm:text-base text-sm'>Don't have an account? <Link to={'/signup'} className='underline'>Signup</Link></p>
        </section>
    )
}

export default Login;