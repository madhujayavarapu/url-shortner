If we use target module as `ESNext` then we need to run the below command to start dev server.
nodemon -I --exec node --experimental-specifier-resolution=node --loader ts-node/esm ./src/main.ts