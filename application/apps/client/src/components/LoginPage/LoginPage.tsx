import { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../RegisterPage/Input/Input";
import Button from "../RegisterPage/Button/Button";
import * as C from './styles'


export const LoginPage = () => {

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      await signIn(email, password);
      navigate('/home')
    } catch (error) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <>
    <C.Container>
      <C.Content>
        <C.Label>LOGIN</C.Label> 
               
        <Input
          onChange={(e)=>{[setEmail(e.target.value)]}}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="email..."
          required={true}
        />
              
        <Input
          onChange={(e)=>{[setPassword(e.target.value)]}}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="senha..."
          required
        />
         
        <Button Text="Login" Type="submit" onClick={onSubmit}/>   
        <C.labelError>{error }</C.labelError>
        <C.LabelSignin>
          <C.Strong>
            <a href="/register">&nbsp;Registre-se</a>
          </C.Strong>
        </C.LabelSignin>  
      </C.Content>
    </C.Container>
    </>
  );
};
