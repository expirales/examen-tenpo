import { useState } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const [fields, setFields] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simulamos un llamado a la API.
    // aca llamamos al operador de login (userOperator)
    // y esperamos el token.
    // en este caso lo simulamos con un setTimeout
    // y un token ficticio.
    // >>> await userOperator.login(fields.email, fields.password); <<<
    // luego updateamos el estado de zustand.
    // y finalmente redirigimos al home.
    setTimeout(() => {
      login("fake-token-123", fields.email);
      navigate("/");
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="cnt-login-page">
      <div className="cnt-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={fields.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={fields.password}
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
