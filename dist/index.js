const meuCarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0 Flex"
};
console.log("Meu Carro:", meuCarro);
const multiplicar = (x, y) => x * y;
console.log("Multiplicação 3 x 4:", multiplicar(3, 4)); // 12
console.log("Multiplicação 7 x 2:", multiplicar(7, 2)); // 14
// Exercício 3 - Função Genérica
function inverterArray(array) {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["TypeScript", "é", "incrível"];
console.log("Array invertido (números):", inverterArray(numeros)); // [5, 4, 3, 2, 1]
console.log("Array invertido (palavras):", inverterArray(palavras)); // ["incrível", "é", "TypeScript"]
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
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
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
    nome: "Carlos",
    curso: "Engenharia de Software",
    empresa: "Tech Corp",
    cargo: "Desenvolvedor Júnior"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);
