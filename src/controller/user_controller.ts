import { Request, Response } from "express";
import { Usuario, inserir, pegarEmail } from "../models/user";

export function mostrar_login (req: Request, res: Response) {
    res.render('login', {
        message: null
    });
}

export async function registrar(req: Request, res: Response) {
    const usuario = req.body;
    if (!usuario) {
        return res.render('login', {
            message: "Preencha todos os campos"
        });
    }
    
    const usuario_encontrado = await pegarEmail(usuario.email);

    if (usuario_encontrado) {
        return res.render('login', {
            message: "Erro, email já existente..."
        });
    }

    await inserir (usuario);

    res.render('login', {
        message: "Tudo certo!!"
    });
}