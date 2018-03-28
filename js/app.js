var scores = { // Va a llegar el registro de los jugadores y sus puntos.

};//Scores cierre
console.log(scores);

function createPlayer(object,name){ //Esta funcion crea las key Name que se almacenara en scores y las inicializa en 0
    object[name.toLowerCase()] = 0 ;
    console.log(object);
}//cierre createPlayer


function addPoints(name, points){// Esta funcion almacena los values points en las key names
    scores[name.toLowerCase()] += points; // Aqui  hace que sume los resultados con el nuevo argumento asi actualiza el valor no lo suple
    console.log(scores);

}//cierre addPoints

function printAllPoints(){
    var arrayPlayer =  Object.keys(scores); // jala las llaves del objeto y los mete a un array definido
    var resultados = ""; //imprimira todos los scores
    

    for(var k = 0 ; k < arrayPlayer.length ; k++){
     /*   resultados += arrayPlayer[k] + ': ' + scores [arrayPlayer[k]] + ', ';  array player esta accediendo entre los keys del objeto
                                                              y el scores  esta iterando entre los values score  [Name] = value*/
        if(k  == arrayPlayer.length -1){//se verifica que estamos en el ultimo index
            resultados += arrayPlayer[k] + ': ' + scores[arrayPlayer[k]];

            }else{
                resultados += arrayPlayer[k] + ': ' + scores[arrayPlayer[k]] + ", " ;
            

        }//cierre if

    }//  Cierre del for / puede usarse un for in  

    return resultados;
    

}// cierre printAllPoints 

    


createPlayer(scores, "Ana");
addPoints("Ana", 20);
addPoints("Ana", 40);
createPlayer(scores, "Silvana");
addPoints("silvana", 50)
console.log(printAllPoints());


