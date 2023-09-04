import React from 'react'
import './LoginPage.css'

export const LoginPage = () => {
    return(
        <>
            <body>
                <div id="cool_div">
                    <h1>Login</h1>
                    <div>
                        <form action="/users/login" method="POST">
                            <div>
                                <input type="email" name="email" id="email" placeholder="email..." required/>
                            </div>

                            <div>
                                <input type="password" name="password" id="password" placeholder="senha..." required/>
                            </div>

                            <div>
                                <input type="submit" value="Login"/>
                            </div>

                            <a href="/register">ainda não registrado?</a>
                        </form>
                    </div>
                </div>
            </body>
        </>
    )
}