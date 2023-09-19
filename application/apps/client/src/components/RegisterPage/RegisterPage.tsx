import { useAuth } from '../../contexts/auth/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as C from './styles'
import Button from './Button/Button';
import Input from './Input/Input';
import image from '../../assets/GIF.gif'
import { showSuccessToast, showErrorToast, showAutoCloseAlert } from '../Alert/Alert';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import Spinner from 'react-bootstrap/Spinner';
        

export const RegisterPage =()=> {

  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const onSubmit = async () => {
    
    try {
      setIsLoading(true)
      if (password !== password2) {
        setError("As senhas não são iguais!");
        return;
      } else if (!email || !username || !password || !password2) {
        setError("Preencha todos os campos!");
        setIsLoading(false)
        return;
      } else if (!isValidEmail(email)) {
        setError("Email inválido!");
        setIsLoading(false)
        return;
      } else if (password.length < 8) {
        setError("A senha deve ter pelo menos 8 caracteres!");
        setIsLoading(false)
        return;
      }else if (!isCheckboxChecked) {
        setError("Você deve aceitar os termos de serviço para se cadastrar.");
        setIsLoading(false);
        return;
      } else {
        await signUp(email, password, username);
        setIsLoading(false)
        await showAutoCloseAlert("Validando Cadastro...");
        setError("");
        showSuccessToast('Registrado com sucesso!');
        navigate('/login');
      }
    } catch (error) {
      await showAutoCloseAlert("Validando Cadastro...");
      setIsLoading(false)
      setError("Já existe cadastro neste e-mail!");
      showErrorToast("Usuário já cadastrado!")
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
            onChange={(e)=>{[setPassword2(e.target.value)]}}
            value={password2}
            type="password" 
            id="password2"
            name="password2"
            placeholder="confirme sua senha" 
            required/>
          </C.IconWrapper>
         
          <div className='d-flex flex-row justify-content-center '>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault'
            onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}/>
            <p>Aceito todos os <span style={{color: 'blue', cursor: 'pointer'}}>termos de serviço</span></p>
          </div>

            {isLoading ? ( // Renderize o spinner se isLoading for true
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Button Text="Registrar" Type='submit' onClick={onSubmit}/>// Renderize o botão quando isLoading for false
            )}

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
          <C.Title>E apoie uma iniciativa</C.Title>
          </div>
          <C.Image src={image}/>
          
        </div>
    </C.Container>    
  )
}
