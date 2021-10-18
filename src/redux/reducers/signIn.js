
const initState= {status: "NO_LOGIN", loginInfo:[]}
const signIn =(state=initState, action)=>{
console.log(action.type)
console.log(action.payload)
    switch (action.type) {
        case "LOGIN":
            return({
                status: 'LOGIN',
                loginInfo: action.payload
            })
        default:
            return{
                state
            }
    }

    
}
export default signIn