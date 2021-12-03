import express from 'express';
import { Application } from "express";
import * as bodyParser from "body-parser";
import * as BaseRoute from './routes/BaseRoute'

export interface IConfig{
    port: number;
    controllers: Array<any>,
    middleWares: Array<any>
}

export default class App {
    private readonly port: number | string;
    public app: Application;

    constructor(config: IConfig) {
        this.port = config.port;
        this.app = express();
        this.app.use(bodyParser.json());

        this.setupControllers()
    }

    setupControllers() {
        this.app.get('/base', BaseRoute.basePath)
    }


    listen() {
        try {
            this.app.listen(this.port, () => {
                console.info('==============================');
                console.info('Server listening on port: ' + this.port);
                console.info('==============================');
            });
        } catch (err) {
            console.error('Error this.app.listen() server.ts', err);
        }
    }
}
