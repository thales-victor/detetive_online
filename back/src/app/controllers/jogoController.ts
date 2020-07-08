import { Request, Response } from 'express';
import { jogoInterface } from '../models/interfaces/jogoInteface';
import JogoSchema from '../models/jogo';

export default class JogoController {
  public async criarJogo(req: Request, res: Response) {
    const jogo: jogoInterface = req.body;
    // try {
    //   await JogoSchema.create(jogo);
    //   return res.status(201).json(jogo)
    // } catch (error) {
    //   return res.status(400).json(error);
    // }

    JogoSchema.create(jogo)
      .then((response) => res.status(201).json(response))
      .catch((err: Error) => res.status(500).json(err));


  }
}