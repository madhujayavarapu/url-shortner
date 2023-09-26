import bodyParser from 'body-parser';
import { Application } from "express";
import cors from 'cors'
import helmet from 'helmet';

export interface IMiddlewareOpts {
    app: Application
}

export const initMiddlewares = ({ app }: IMiddlewareOpts) => {
    if(!app) return

    // Add CORS support.
    app.use(cors({
        origin: '*'
    }))

    // Add helmet middleware for secure headers
    app.use(helmet())

    // Add Body parser support.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false,
        limit: '50mb'
    }))
}