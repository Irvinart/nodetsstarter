import { Response, Request } from "express";

export const basePath = async (req: Request, res: Response) => {
    try {
        res.status(200).send('Hello World');
    } catch (err) {
        res.status(400).send(err);
    }
};


