

import './App.css'
import Display from './components/Display'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'


function App() {


  return (
   
     <UserContextProvider>
       <h1>App Login With Context Api</h1>
       <Login/>
       <Display/>
     </UserContextProvider>
    
     
   
  )
}

export default App
