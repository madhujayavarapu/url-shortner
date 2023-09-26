# Steps to create a node js app service

## Step 1
Create a new folder and change the directory to the new folder
```shell
> mkdir <appname>
> cd <appname>
```

## Step 2
Create a folder
```
> npm init -y

# install the dev dependencies
> npm i -D typescript @types/node @types/express

# install the dependencies
> npm i express cors body-parser helmet dotenv --save
```

## step 3
Create a `tsconfig.json` file and copy the below code
```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "skipLibCheck": true
  }
}
```

## Step 4
Create a `.env` file and add all your environment variables inside that

Add scripts to package.json
```
{
    "scripts": {
        "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
        "build": "tsc",
        "start": "npm run build && node build/index.js"
    }
}
```