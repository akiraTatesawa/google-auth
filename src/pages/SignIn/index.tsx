import "./styles.scss";

import { GoogleLogo } from "phosphor-react";

export function SignIn() {
  return (
    <div className="container">
      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google
        você <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer
        cadastro.
      </span>

      <button type="button" className="button">
        <GoogleLogo size={24} />
        Entrar com Google
      </button>
    </div>
  );
}
