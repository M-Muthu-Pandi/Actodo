import { Link } from 'react-router-dom';

const Signup = (props) => {
    const handleUinput = props.handleUinput;
    const handlePinput = props.handlePinput;
    const addUser = props.addUser;

    return (
        <section className="flex flex-col gap-2 my-2">
            <input onChange={handleUinput} type="text" placeholder="User Name" className="w-52 border border-black p-1 rounded-md bg-transparent" />
            <input onChange={handlePinput} type="text" placeholder="Password" className="w-52 border border-black p-1 rounded-md bg-transparent" />
            <input type="text" placeholder="Confirm Password" className="w-52 border border-black p-1 rounded-md bg-transparent" />
            <button onClick={addUser} className="bg-[#fca201] font-medium w-24 p-1 rounded-md">Sign Up</button>

            <p className='sm:text-base text-sm'>Already have an account? <Link to={'/'} className='underline'>Login</Link></p>
        </section>
    )
}

export default Signup;