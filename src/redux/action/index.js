import axios from "axios"

export const signUpAction = async () => {
    console.log("/////////")
  

     try {
         const response = await axios.post('http://localhost:8081/customer/addCustomer', {email: "aa",
         firstName: "aa",
         lastName: "aa",
         mobileNumber: "123456"}, 
            {headers: {'Content-Type': 'application/json'}});
         console.log(response)
         return({type:"LOGIN"})
     } catch (error){
         console.log(error)
     }

     
}