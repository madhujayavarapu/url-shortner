import express from 'express';
import { initMiddlewares } from './middlewares';

export interface IAppOpts {
    port: number
}

export const initApp = ({ port }: IAppOpts) => {
    // Create an express application.
    const app = express()

    // Add middlewares.
    initMiddlewares({
        app
    })

    // Start server on port
    app.listen(port, () => {
        console.log(`Server started on ${port}`)
    })

    return app
}