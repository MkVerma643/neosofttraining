import {createStore} from "redux"

import demo from "./reducers"

var store=createStore(demo)

// store.dispatch({
//     type:"login"
// })

// console.log("..............................", store.getState())

// store.dispatch({
//     type:"LOGIN",
//     payload:{email:"mukeshverma643@gmail.com", name:"Mukesh Verma"}
// })

// console.log("after login match", store.getState())

export default store