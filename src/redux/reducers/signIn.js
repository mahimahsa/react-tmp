
export  const signIn =(state='', action)=>{

    switch (action.type) {
        case "LOGIN":
            return({
                ...state,
                status: 'LOGIN'
            })
        default:
            return({
                status: ''
            } )   
    }

    
}