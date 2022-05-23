//Sin UI

//Traigo redux
const redux = require('redux');

const ADD = 'add';
const REST = 'rest';
const SET ="set";

//Estado inicial - es un objeto
const initialState = {
    count: 0,
}

function reducer (state = initialState,action) { // funcion donde sale el estado nuevo.
    switch (action.type){ //este type dira que hacer - es un obj.
        case ADD:{
            return {
                ...state, //copio la propiedad state y devuelvo el valor de la prop. count cambiado.
                //La copia tiene que ir arriba, antes de hacer el cambio (no anda sino)
                //O se puedo user el objet assign
                count: state.count +1, //devuelvo un objeto modificado con la prop. count por la acción.
                
            };
        }
        case REST: {
            return {
                ...state,
                count: state.count - 1,
            };

        }
        case SET :{
            return {
                ...state,
                count: action.payload,//hace referencia la Action Creation
            };
        }
        default:{
            return state;
        }
    }
}

//Store de redux => se encuentra toda la lógica de redux
const pepe = redux.createStore (reducer); //le mandamos la funcion reductora, la que modifica el estado

//tomo el store y despacho un accion

//Metodo suscribe: ejecuta todo el contenido de la funcion => ejecuta los cambios si los hay.
//=> redux escucha cambios y alli subscribe y los muestras. 
 pepe.subscribe (() => {
    console.log (pepe.getState());
 });

/*console.log (pepe);*/

document.getElementById('btn').onclick=() => pepe.dispatch({type:"ad"});
document.getElementById('result').innerHTML = pepe.getElementById().count;

pepe.dispatch ({type:"add"});
pepe.dispatch ({type:"add"});
/*store.dispatch ({type:"add"});
store.dispatch ({type:"add"});
store.dispatch ({type:"add"});
store.dispatch ({type:"add"});
store.dispatch ({type:"add"});
store.dispatch ({type:"rest"});*/

//console.log(pepe.getState()); //metodo que devuelve el estado - get State

//FORMA MAS OPTIMA! 
//Action Creator: Funcion que devuelve la accion EJECUTADA

function add () {
    return {type:ADD}
}
//IGUAL QUE:
//retorna siempre un estado NUEVO! 
/*const incremento = ()=> {return {type: INCREMENTO}};*/

document.getElementById('btn').onclick=() => pepe.dispatch(add());

function set (value) { //Puede ser un obj, array etc este "value"
    return {type:SET, payload:value};
}
document.getElementById('btn_reset').onclick=() => pepe.dispatch(set(0));