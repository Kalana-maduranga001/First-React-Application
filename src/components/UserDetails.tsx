interface UserDetailsProps{
    name : String
    age: number
    email? : String
    address: String
    isAdmin : boolean
}

const UserDetails = ({ name , age , email , address , isAdmin} : UserDetailsProps) =>{

     return (
        <div>
           <h1>Name :{name} </h1>
           <h1>Age : {age} </h1>
           <h1>Email :{email} </h1>
           <h1>Address : {address}</h1>
           <h1>isAdmin : {isAdmin ? "Yes" : "No"}</h1>
        </div>
    )

}

export default UserDetails;