require('dotenv').config();

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
}

async function loadContract() {
    let abi = require("./ABI/MintPWR.json");
    let address = process.env.MAIN_PWR_CONTRACT_ADDRESS;
    return await new window.web3.eth.Contract(abi, address);
}
async function getCurrentAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

async function run() {
    await loadWeb3();
    window.contract = await loadContract();
    const account = await getCurrentAccount();
    let result = await window.contract.methods.create(process.env.IPFS_PWR).send({ from: account, value: 100000000000000000 });
    myContractInstance.depositFunds({ from: web3.eth.accounts[0], gas: 3000000, value: 100000000000000000 }, function (err, res) { });
}

if (typeof window.ethereum !== 'undefined') {
    run()
}