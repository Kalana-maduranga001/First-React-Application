// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// React Syntax  
// class Component

// import { Component } from "react"
// class App extends Component{
//   render(){
//     return <h1>Hello, React!</h1>
//   }
// }

// export default App
import reactLogo from './assets/react.svg'
import './App.css'
import { Fragment } from 'react/jsx-runtime'
import MyComponent from './components/MyComponent'
import UserDetails from './components/UserDetails'

function App() {
  let value: String = "KALANA"
  return (
    //React wala Elemata Wrap karanna use karanna puluwan
    <> 
      <MyComponent>
      <h5>I'm default prop</h5>
      </MyComponent>

      <MyComponent name={"Kalana"} age={30} />

      {console.log(value)}
      {value ? <h1>hello , {value}</h1> : <h1>Hello, React!</h1>}
       
      
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>    
     </div>

     <div>Hi react 01</div>
     <div>Hi react 02</div>
     <div>Hi react 03</div>
     <div>Hi react 04</div>
     <div>Hi react 05</div>

     <Fragment>
      <h2>Welcome to React</h2>
      <p>This is a simple React application.</p>
     </Fragment>

      <h1 style = {{color: "red", backgroundColor: "black"}}>
             {value ? <h4>hello , {value}</h4> : <h4>Hello, React!</h4>} 
      </h1>




     <h1>user Details list</h1>
     <hr />
     <UserDetails name = "kalana" age = {24} email = "kalana@example.com" address = "colombo" isAdmin = {true} />
     <hr /> 
     <UserDetails name = "Nimal" age = {21} email = "nimal@example.com" address = "gampaha" isAdmin = {false} />



















    </>
  )

}

export default App 

// for wrap element

// 1.<Fragment> </Fragment>  // old way
// 2.<> </>  // new way
// 3.<div> </div>  // using some element 

