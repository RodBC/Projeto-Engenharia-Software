import { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../RegisterPage/Input/Input";
import Button from "../RegisterPage/Button/Button";
import { showSuccessToast, showErrorToast } from '../Alert/Alert';
import * as C from './styles';
import Spinner from 'react-bootstrap/Spinner';

export const LoginPage = () => {

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    
    try {
      setIsLoading(true);
      if (!email || !password){
        setError("Preencha todos os campos!");
        setIsLoading(false); // Defina isLoading como false quando houver erro
        return
      } else if (!isValidEmail(email)) {
        setError("Email inválido!");
        setIsLoading(false); // Defina isLoading como false quando houver erro
        return;
      } else if (password.length < 8) {
        setError("A senha deve ter pelo menos 8 caracteres!");
        setIsLoading(false); // Defina isLoading como false quando houver erro
        return;
      } else{
        await signIn(email, password);
        setIsLoading(false); // Defina isLoading como false quando o signIn for concluído com sucesso
        showSuccessToast("Usuário Validado!")
        navigate('/home')
      }
      
    } catch (error) {
      setIsLoading(false); // Defina isLoading como false quando houver erro
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
         
        {isLoading ? ( // Renderize o spinner se isLoading for true
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Button Text="Login" Type="submit" onClick={onSubmit}/> // Renderize o botão quando isLoading for false
        )}
        
        <C.labelError>{error}</C.labelError>
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
