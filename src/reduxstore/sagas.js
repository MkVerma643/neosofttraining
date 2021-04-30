import axios from "axios"
import {call} from "redux-saga"

function login(action){
    return axios({
        method:"post",
        url:"",
        data:action.payload
    })
}

function* LoginSaga(){

}

function* LoginGenerator(){

}