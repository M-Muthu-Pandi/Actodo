import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Signup from './signup';
import Actodo from '../actodo';

const SignUp = (props) => {
    const navigate = useNavigate();
    const users = props.users;
    const setUsers = props.setUsers;

    const [eusername, setEusername] = useState();
    const [epassword, setEpassword] = useState();

    const handleUinput = (e) => {
        setEusername(e.target.value);
    }

    const handlePinput = (e) => {
        setEpassword(e.target.value);
    }

    const addUser = () => {
        setUsers([...users, { username: eusername, password: epassword }]);
        navigate('/');
    }

    return (
        <div className="bg-black py-16 px-5 sm:px-16 h-screen">
            <Actodo />
            <main className="bg-[#efefef] px-7 py-10 sm:px-10 border rounded-md">
                {/* Header */}
                <Header />

                {/* Signup component */}
                <Signup handleUinput={handleUinput} handlePinput={handlePinput} addUser={addUser} />
            </main>
        </div>
    )
}

export default SignUp;