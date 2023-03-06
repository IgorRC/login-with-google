import { useState } from 'react'
import './App.css'
import { useEffect} from 'react'
import { gapi } from 'gapi-script'
import GoogleLogin from 'react-google-login'

function App() {
  const clienteID = "119083767263-4tkc9bh3dv57mhbvmd125k926ootngd0.apps.googleusercontent.com"
  const [user , setUser] = useState({})
  useEffect (()=>{
    const start = () => {
      gapi.auth2.init({clientId: clienteID,})
    }

    gapi.load("client:auth2",start)
  },[])

  const onSuccess = (response) =>{
    setUser(response.profileObj)
    console.log(response)
  }

  const onFailure = () => {
    console.log("Error")
  }

  return (
    <div className="App">
      <h2>LOGIN</h2>
      <GoogleLogin clientId={clienteID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_policy"
      />
      <div className={user?"profile":"hidden"}>
        <img src={user.imageUrl + ""} alt="" />
        <h3>{user.name}</h3>
      </div>
    </div>
  )
}

export default App
