import React from 'react'

function Login() {
    return(
        <form>
            <h1>Login</h1>
            <input 
            input="text"
            name="username"
            placeholder="Username"
            />
            <input 
            input="password"
            name="password"
            placeholder="Password"
            />
            <button>Log In</button>
        </form>
    )
}

export default Login