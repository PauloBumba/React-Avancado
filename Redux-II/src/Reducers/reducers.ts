import {createSlice, PayloadAction} from "@reduxjs/toolkit"
interface User {
    name:string ,
    email:string
}

interface Usestate {
    user:User | null
}

const initialState: Usestate = {
    user: null
}

export const UserSlice = createSlice(
{
    name:"user",
    initialState, 
    reducers: {
            Logins :(state, action:PayloadAction<User>)=>{
                localStorage.setItem("user", JSON.stringify(action.payload))
                state.user=action.payload;

                setTimeout(()=>{
                localStorage.removeItem("user");
                state.user=null
                },400)

            }, 
            Logout: (state)=>{
                state.user=null
                localStorage.removeItem("user");
            }
    }
}
    
)




export const  { Logins, Logout} = UserSlice.actions
export default UserSlice.reducer;