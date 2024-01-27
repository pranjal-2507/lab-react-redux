const initState = {
    likes : 0
}


export default function Reducer(state = initState,{type,payload}){
switch (type){
    case "INCREMENT":{
        return {likes: state.likes+payload}
    }
    case "DECREMENT" : {
        return{likes : state.likes+payload}
    }
    default : {
        return state
    }
}
}