var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl))resultSet.push(startEl);

  //Obtener los child
  for (let i=0; i< startEl.children.length;i++){
    let child = startEl.children [i];
    let elementsFound =traverseDomAndCollectElements(matchFunc,child);
    resultSet = [...resultSet,...elementsFound]; //Otra forma de concatenar
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí

  //Detectar si es un ID
  if( selector[0]==='#') return 'id';
  //Detectar si es una clase
  if (selector[0]==='.') return 'class';
  //Detectar si es un Tag Class:div.red  - posee longitud 2
  if (selector.split('.').length === 2) return 'tag.class';
  //Detectar si es tag
  return 'tag'
  
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    //Creo la funcion matchFunction
     matchFunction = function(element){
       //element (ELEMENT HTML) tiene el ID que se esta buscando.
      return '#' + element.id === selector; //#idone  === #idone
     }
  } else if (selectorType === "class") {
    matchFunction = function(element){
     //Traemos el arreglo
     let classes = element.classList;
     for (let i=0; i<classes.length;i++){
       if ('.' + classes[i] === selector){
         return true
      };
     } 
     return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function (element){ 
    let [t,c]= selector.split('.');//Destractor => ['div','classone];
    return matchFunctionMaker (t)(element) && matchFunctionMaker('.'+ c)(element);
   } 
  } else if (selectorType === "tag") {
    matchFunction =function(element){
      //element (ELEMENT HTML) tiene el TAG que se esta buscando.
      //Ojo: tagname devuelve en mayuscula, por eso se usa toUpper sino se pude usar localName
      return element.tagName === selector.toUpperCase();
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
