import axios from "axios"

export const signUpAction = async () => {
    console.log("/////////")
    

     try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
         console.log(response.data)
         return({type:"LOGIN", payload: response.data})
        
     } catch (error){
         console.log(error)
     }

     
}