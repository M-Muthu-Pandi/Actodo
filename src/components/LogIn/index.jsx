import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Login from './login';
import Actodo from '../actodo';

const LogIn = (props) => {
    const navigate = useNavigate();
    const [eusername, setEusername] = useState();
    const [epassword, setEpassword] = useState();
    const [ruser, setRuser] = useState(true);

    const users = props.users;

    const handleUinput = (e) => {
        setEusername(e.target.value);
    }

    const handlePinput = (e) => {
        setEpassword(e.target.value);
    }

    const checkUser = () => {
        // console.log(users);

        let userFound = false;

        users.forEach((item) => {
            if (item.username === eusername && item.password === epassword) {
                // console.log("Login Successful");
                userFound = true;
                navigate('/todo', { state: { user: eusername } });
            }
        })

        if (userFound === false) {
            // console.log("Login Failed");
            setRuser(false)
        }
    }

    return (
        <div className="bg-black py-16 px-5 sm:px-16 h-screen">
            <Actodo />
            <main className="bg-[#efefef] px-7 py-10 sm:px-10 border rounded-md">
                {/* Header */}
                <Header ruser={ruser} />

                {/* Login component */}
                <Login handleUinput={handleUinput} handlePinput={handlePinput} checkUser={checkUser} />
            </main>
        </div>
    )
}

export default LogIn;