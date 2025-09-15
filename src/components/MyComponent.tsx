import { Children } from "react";

//chaild component
const MyComponent = ({name , age , email , address , Children} : any) =>{
    //const {name , age , address} = prop; }
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <h1>{address}</h1>
            <hr />
            {Children}
            <h1>Hello....! this is sample component</h1>
            <h2>This is my first Component</h2>
        </div>
    )
}
// const MyComponent = (prop: any) =>{
//     return (
//         <>
//       <h1>{prop.children}</h1>
//       <h1>{prop.name}</h1>
//       <h1>{prop.age}</h1>
//       <hr />
//       <h1>Hello....! this is sample component</h1>
//       <h2>This is my first Component</h2>
//     </>
//     )
      
// }
export default MyComponent;