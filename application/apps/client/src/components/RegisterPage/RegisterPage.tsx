import React from 'react'

export const RegisterPage =()=> {
  return (
      <div id="cool_div">
          <h1>Registro</h1>
          <form action="/register" method="POST">
              <div>
                  <input 
                  type="text" 
                  id="username" 
                  placeholder="nome de usuário..."
                  name="username" 
                  required/>
              </div>
              
              <div>
                  <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="email..." 
                  required/>
              </div>
              
              <div>
                  <input 
                  type="password" 
                  id="password" 
                  name="password"
                  placeholder="senha..." 
                  required/>
              </div>
              
              <div>
                  <input
                  type="password" 
                  id="password2"
                  name="password2"
                  placeholder="confirme a senha..." 
                  required/>
              </div>
              
              <div>
                  <input 
                  type="submit" 
                  value="Registrar"/>
              </div>
              
              <a href="/login">já estou registrado</a>
          </form>
      </div>
  )
}
