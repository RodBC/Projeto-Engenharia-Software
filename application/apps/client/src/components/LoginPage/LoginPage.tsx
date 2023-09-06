import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'

type LoginForm = {
  email: string;
  password: string;
};

export const LoginPage = () => {

  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<LoginForm>();
  const navigate = useNavigate();


  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginForm) => {
    try {
      await signIn(data.email, data.password);
      navigate('/home')
      // Redirecionando para a página após o login bem-sucedido
    } catch (error) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <>
        <div id="cool_div">
          <h1>Login</h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email..."
                  required
                />
              </div>

              <div>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="senha..."
                  required
                />
              </div>

              <div>
                <input type="submit" value="Login" />
              </div>

              {error && <p>{error}</p>}

              <a href="/register">ainda não registrado?</a>
            </form>
          </div>
        </div>
    </>
  );
};
