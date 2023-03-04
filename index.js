
// Desenvolva aqui a sua lógica
function camelCase(string) {
    let smallString=string
    let novapalavra=""
    for(let i=0 ; i<smallString.length ; i++){
        if(i==0){
            novapalavra= novapalavra+smallString[i].toLowerCase()
            i++
        }
        else if(smallString[i]==" "){
            novapalavra= novapalavra+smallString[i+1].toUpperCase()
            i+=2
        } 
        novapalavra= novapalavra+smallString[i]
    }
    return novapalavra
}  


// Testes, não precisa comentar, apenas rodar seu código e saberá o retorno!

console.log(camelCase("camel case") == "camelCase" ? '\033[32mPASS - camelCase \033' : '\033[31mFAIL - ' +  camelCase("camel case") + "\033" )
console.log(camelCase("pastel muito bom") == "pastelMuitoBom" ? '\033[32mPASS - pastelMuitoBom \033' : '\033[31mFAIL - ' +  camelCase("pastel muito bom") + "\033" )
console.log(camelCase("testando uma frase maior") == "testandoUmaFraseMaior" ? '\033[32mPASS - testandoUmaFraseMaior \033' : '\033[31mFAIL - ' +  camelCase("testando uma frase maior") + "\033" )
console.log(camelCase("CamelCase") == "camelCase" ? '\033[32mPASS - camelCase \033' : '\033[31mFAIL - ' +  camelCase("CamelCase") + "\033" )
