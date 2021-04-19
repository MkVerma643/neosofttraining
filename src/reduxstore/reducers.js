var demo=function(state,action){
    switch(action.type){
        case "LOGIN":{
            console.log("Here we have to write logic for login")
            state={...state}
            state["isloggedin"]=true
            state["user"]=action.payload
            return state
        }

        case "LOGOUT":{
            state={...state}
            localStorage.clear()

        }
    }

}

export default demo