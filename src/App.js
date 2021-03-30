import { useState } from 'react'
import './App.css';


const login = "123456789"
const password = "123456789"

function App() {
  const [flag, setFlag] = useState(false)
  const [error, setError] = useState(false)
  const [dataAuth, setDataAuth] = useState({
    login: '',
    password: ''
  })

  console.log(dataAuth)

  const onChange = (e) => {
    setDataAuth({...dataAuth, [e.target.name]: e.target.value})
  }

  const onClick = (e) => {
    if(dataAuth.login === login && dataAuth.password === password)
    {
      setError(false)
      setFlag(true)
    }else{
      setError(true)
      setFlag(false)
    }
  }

  return (
    <div className="App">
      {!flag?
      <div className="auth">
        <div className="field">
          <label htmlFor="log">
            Введите логин
          </label>  
          <input type="text" name="login" id="log" onChange={(e)=>{onChange(e)}}/>
        </div>

        <div className="field">
          <label htmlFor="id">
            Введие пароль
          </label>  
          <input name="password" type="password" onChange={(e)=>{onChange(e)}}/>
        </div>
        <div className="button">
          <input type="button" className="enter" value="Войти" onClick={onClick}/>
        </div>
      </div>
      :
      <div className="table">
        вы вошли
      </div>}
      {error?<p className="error">Неверный логин или пароль</p>:null}
    </div>
  );
}

export default App;
