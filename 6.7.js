let varGlobal = "Eu sou a variável Global"

function minhaVarLocal(varLocal){
    varLocal = console.log("Eu sou a variável Local")
}

console.log(varGlobal)
minhaVarLocal()             

