import { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../RegisterPage/Input/Input";
import Button from "../RegisterPage/Button/Button";
import { showSuccessToast, showErrorToast, showAutoCloseAlert } from '../Alert/Alert';
import * as C from './styles'

export const LoginPage = () => {

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    
    try {
      if (!email || !password){
        setError("Preencha todos os campos!");
      }else if (!email || !password) {
        setError("Preencha todos os campos!");
        return;
      } else if (!isValidEmail(email)) {
        setError("Email inválido!");
        return;
      } else if (password.length < 8) {
        setError("A senha deve ter pelo menos 8 caracteres!");
        return;
      } else{
        await signIn(email, password);
        await showAutoCloseAlert("Validando Credenciais...")
        showSuccessToast("Usuário Validado!")
        navigate('/home')
      }
      
    } catch (error) {
      await showAutoCloseAlert("Validando Credenciais...")
      setError("Erro ao fazer login. Verifique suas credenciais.");
      showErrorToast("Erro ao validar usuário!")
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  return (
    <>
    <C.Container>
      <C.Content>
        <C.Label>LOGIN</C.Label> 
        
        <C.IconWrapper>
        <C.Email/>
        <Input
          onChange={(e)=>{[setEmail(e.target.value)]}}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          required={true}
        />
        </C.IconWrapper>

        <C.IconWrapper>
        <C.Icon />
        <Input
          onChange={(e)=>{[setPassword(e.target.value)]}}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="senha"
          required
        />
        </C.IconWrapper>
         
        <Button Text="Login" Type="submit" onClick={onSubmit}/>   
        <C.labelError>{error }</C.labelError>
        <C.LabelSignin>
          Não possui conta?
            <C.Strong>
                <a href="/register">&nbsp;Registre-se</a>
            </C.Strong>
        </C.LabelSignin>  
      </C.Content>
    </C.Container>
    </>
  );
};
