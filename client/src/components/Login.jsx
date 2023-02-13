import React, {useState, useContext} from 'react';

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);

    function login(e){
        e.preventDefault();
        


        if(password === 'book'){
            const token = 'shop';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({token, email});
        } else {
            alert('wrong details');
        }
    }

    return (
        <form>
            <h2>Login</h2>

            <input type="email" className="form-control" placeholder="email" value={email} 
                onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="password" className="form-control" placeholder="password" value={password} 
                onChange={e => setPassword(e.target.value)} />
            <br />
            <button className="btn btn-primary" onClick={login}>Login</button>
        </form>
    );
}
export default Login ;


