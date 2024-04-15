module.exports = {
  contracts_build_directory: "./client/src/contracts",
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.8.25"
    }
  }
};

