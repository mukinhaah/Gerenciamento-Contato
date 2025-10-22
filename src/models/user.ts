import { connection } from "../infra/connection";

export type Usuario = {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    data_criacao?: string;
}

export async function inserir (usuario: Usuario){
    await connection.query('INSERT INTO usuario(nome, email, senha, data_criacao) VALUES ($1, $2, $3, $4);',
        [
            usuario.nome,
            usuario.email,
            usuario.senha,
            usuario.data_criacao,
        ]
    );
}

export async function pegarEmail (email: string) {
    const { rows } = await connection.query(
        'SELECT * FROM usuario WHERE email=$1',
        [email]
    );
    return rows[0]
}