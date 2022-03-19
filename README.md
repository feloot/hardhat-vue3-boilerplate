### Hardhat-Vue3 boilerplate

This is a pre-configured bootstrap project for developing a Vue3 SPA alongside Hardhat's environment for Solidity contracts.

It uses :
- TypeScript
- Vue3 with VueX and Router
- Webpack
- SASS
- ESLint
- Prettier
- Hardhat with gas reporter
- Ethers
- Mocha and Chai

The project comes with a sample Vue3 app and a test unit for its main component. It also comes with a sample Solidity contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

# Why use CommonJS ?

Hardhat doesn't support ESM yet : https://github.com/NomicFoundation/hardhat/issues/1808

## Getting started

# Project setup
```
npm install
```

# List Hardhat accounts
```shell
npx hardhat accounts
```

# Compile Solidity contracts
```shell
npx hardhat compile
```

# Run development node
```shell
npx hardhat node
```

# Run Hardhat unit tests
```shell
npm run hardhat:test [...files]
```

# Compile and hot-reload Vue app for development
```
npm run serve
```

# Compile and minify Vue app for production
```
npm run build
```

# Run Vue unit tests
```
npm run vue:test [...files]
```

# Lints and fixes files
```
npm run lint
```

# Other useful commands
```shell
npx hardhat clean
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
