const initialState = {
    count: 1,
    other:{
        a:"a",
    },
}

function reducer (State =initialState, action){
    switch(action.type){
        case 'add': 
        return Object.assign(State,{count:State.count+1});     
        default:
            return State;
    }
}

//Para hacer una copia por valor de un obj que pose como prop otro obj y crear otro obj.
var newObj = JSON.parse(JSON.stringify(objB));
