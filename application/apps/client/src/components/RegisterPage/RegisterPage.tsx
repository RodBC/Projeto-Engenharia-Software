import { useAuth } from '../../contexts/auth/AuthContext'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as C from './styles'
import Button from './Button/Button';
import Input from './Input/Input';
import image from '../../assets/GIF.gif'

export const RegisterPage =()=> {

  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { register } = useForm();
  const [error, setError] = useState<string | null>(null);
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = async () => {
    try {
      if (password !== password2) {
        setError("As senhas não são iguais!");
        return;
      } else if (!email || !username || !password || !password2) {
        setError("Preencha todos os campos!");
        return;
      } else if (!isValidEmail(email)) {
        setError("Email inválido!");
        return;
      } else if (password.length < 8) {
        setError("A senha deve ter pelo menos 8 caracteres!");
        return;
      } else {
        await signUp(email, password, username);
        setError("")
        navigate('/login');
      }
    } catch (error) {
      setError("Já existe cadastro neste e-mail!");
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  return (
     
    <C.Container>
      <C.Content>
        <C.Label>CADASTRE-SE</C.Label>

          <C.IconWrapper>
            <C.UserIcon /> 
            <Input
            {...register("username")}
            onChange={(e)=>{[setUsername(e.target.value)]}}
            value={username}
            type="text" 
            id="username" 
            placeholder="nome de usuário"
            name="username"
            required={true}/>
          </C.IconWrapper>
            
          <C.IconWrapper>
            <C.EmailIcon />
            <Input
            {...register("email")}
            onChange={(e)=>{[setEmail(e.target.value)]}}
            value={email}
            type="email" 
            id="email" 
            name="email"
            placeholder="example@email.com" 
            required/>  
          </C.IconWrapper>

          <C.IconWrapper>
            <C.PasswordIcon />
            <Input
            {...register("password")}
            onChange={(e)=>{[setPassword(e.target.value)]}}
            value={password}
            type="password" 
            id="password" 
            name="password"
            placeholder="senha" 
            required
            />
          </C.IconWrapper>

          <C.IconWrapper>
            <C.PasswordIcon />
            <Input
            {...register("password2")}
            onChange={(e)=>{[setPassword2(e.target.value)]}}
            value={password2}
            type="password" 
            id="password2"
            name="password2"
            placeholder="confirme sua senha" 
            required/>
          </C.IconWrapper>

            <Button Text="Registrar" Type='submit' onClick={onSubmit}/>
            <C.labelError>{error }</C.labelError>
            <C.LabelSignup>
                Já tem uma conta?
            <C.Strong>
                <a href="/login">&nbsp;Entre</a>
            </C.Strong>
            </C.LabelSignup>
        </C.Content>
        <div>
          <div>
          <C.Title>Cadastre-se</C.Title>
          <C.Title>E entre para o nosso time</C.Title>
          </div>
          <C.Image src={image}/>
          
        </div>
    </C.Container>    
  )
}
