import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { GoogleLogo } from "phosphor-react";
import { useState } from "react";

import { auth } from "../../services/firebase";
import "./styles.scss";

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    const promise = signInWithPopup(auth, provider);

    promise
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social, por exemplo, autenticação com a Google
        você <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer
        cadastro.
      </span>

      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <GoogleLogo size={24} />
        Entrar com Google
      </button>
    </div>
  );
}
