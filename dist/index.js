const meuCarro = {
    marca: "Lexus",
    modelo: "Ls",
    ano: 2025,
    motor: "V10"
};
console.log("Meu Carro:", meuCarro);
const multiplicar = (x, y) => x * y;
console.log("Multiplicação 5 x 5:", multiplicar(5, 5));
console.log("Multiplicação 9 x 9:", multiplicar(9, 9));
// Exercício 3 - Função Genérica
function inverterArray(array) {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["TypeScript", "é", "incrível"];
console.log("Array invertido (números):", inverterArray(numeros));
console.log("Array invertido (palavras):", inverterArray(palavras));
class UsuarioRepositorio {
    constructor() {
        this.usuarios = [];
    }
    salvar(dado) {
        this.usuarios.push(dado);
    }
    obterTodos() {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Henri", email: "henri@email.com" });
repo.salvar({ nome: "ALice", email: "alice@email.com" });
console.log("Lista de usuários:", repo.obterTodos());
function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    }
    else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);
const estudanteTrabalhador = {
    nome: "Henri",
    curso: "Engenharia de Software",
    empresa: "Google",
    cargo: "CEO"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);
