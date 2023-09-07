import { useAuth } from '../../contexts/auth/AuthContext'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type RegisterForm = {
    email: string;
    password: string;
    password2: string;
    username: string;
  };
  
export const RegisterPage =()=> {

  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { register, handleSubmit } = useForm<RegisterForm>();
  const [error, setError] = useState<string | null>(null);

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = async (data: RegisterForm) => {
    try {
      
      if (password !== password2) {
            setError("As senhas não são iguais!");
            return;
      }else{
        await signUp(data.email, data.password, data.username);
        alert("Usuário cadastrado com sucesso!")
        navigate('/login')
      }

    } catch (error) {
      setError("Usuário já possui cadastro!");
    }
  };
  return (
      <div id="cool_div">
          <h1>Registro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <input 
                  {...register("username")}
                  type="text" 
                  id="username" 
                  placeholder="nome de usuário..."
                  name="username" 
                  required/>
              </div>
              
              <div>
                  <input
                   {...register("email")}
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="email..." 
                  required/>
              </div>
              
              <div>
                  <input 
                  {...register("password")}
                  onChange={(e)=>{[setPassword(e.target.value)]}}
                  value={password}
                  type="password" 
                  id="password" 
                  name="password"
                  placeholder="senha..." 
                  required/>
              </div>
              
              <div>
                  <input
                  {...register("password2")}
                  onChange={(e)=>{[setPassword2(e.target.value)]}}
                  value={password2}
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

              {error && <p>{error}</p>}
              
              <a href="/login">já estou registrado</a>
          </form>
      </div>
  )
}
