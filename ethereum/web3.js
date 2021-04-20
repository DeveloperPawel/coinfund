import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser an metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we are on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/b3bce56ee87849d2b432c91d7a00c46a'
    );
    web3 = new Web3(provider);
}

export default web3;