//Exercício 1 - Interface 
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
}
const meuCarro: Carro = {
    marca: "Lexus",
    modelo: "Ls",
    ano: 2025,
    motor: "V10"
};
console.log("Meu Carro:", meuCarro);


//Exercício 2 - Interface para Multiplicação
interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 5 x 5:", multiplicar(5, 5)); 
console.log("Multiplicação 9 x 9:", multiplicar(9, 9)); 


// Exercício 3 - Função Genérica
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["TypeScript", "é", "incrível"];
console.log("Array invertido (números):", inverterArray(numeros)); 
console.log("Array invertido (palavras):", inverterArray(palavras)); 


// Exercício 4 - Interface Genérica
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Henri", email: "henri@email.com" });
repo.salvar({ nome: "ALice", email: "alice@email.com" });
console.log("Lista de usuários:", repo.obterTodos());


//Exercício 5 - Type Alias
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);

// Exercício 6 - Intersection Types
type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Henri",
    curso: "Engenharia de Software",
    empresa: "Google",
    cargo: "CEO"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);