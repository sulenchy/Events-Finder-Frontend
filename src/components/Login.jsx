import React from 'react';
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
        <section className="container flex-center">
            <header><h2>Login</h2></header>
            <main className="form-wrapper">
                <form onSubmit={() => {}}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input className="input-control" type="email" id="email" name="email"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input className="input-control" type="password" id="password" name="password"></input>
                    </div>
                    <div className="form-control">
                        <button  className="input-control" style={{ cursor: "pointer", marginTop: "5px"}} type="submit">Submit</button>
                    </div>
                </form>
            </main>
            <footer><p>Don&apos;t have an account? <Link to="/">Register</Link></p></footer>
        </section>
    </>
  )
}

export default Login
