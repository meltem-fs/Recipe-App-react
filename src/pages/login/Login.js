import React, { useState } from 'react'
import PrivateRouter from '../../router/PrivateRouter'
import LoginStyle, { ButtonStyle, LabelStyle ,Inputstyle} from "./Login.style"

const Login = () => {
  const [login, setLogin] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("dsadasdasd")
    console.log(login);
  }
  return (
    <LoginStyle>
      <form action="" onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <LabelStyle htmlFor="name">Enter your name</LabelStyle>
        <br />
        <Inputstyle type="text" id="name" />
        <br />

        <LabelStyle htmlFor="password">Enter your password</LabelStyle>
        <br />
        <Inputstyle type="password" id="password" />

        <ButtonStyle onClick={() => setLogin(true)} type="submit">
          Log in
        </ButtonStyle>
      </form>

      {login && <PrivateRouter setLogin={setLogin} login={login} />}
    </LoginStyle>
  );
}

export default Login