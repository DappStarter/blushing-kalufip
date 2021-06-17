require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember history hockey private olympic thunder'; 
let testAccounts = [
"0x1240f8d33e00eea1a480bd99e8cb3a85ce3e26dd9efa0d6d43548956bc877fe2",
"0x1e83a8efd0a82025678f2898bae53159bebc2ee2f6c03c7f722fcd048692f3a7",
"0xbf5c122d63b071d351a44ba95fe43e58fa92da317140d879934529d542f0d994",
"0xb4b8360a62a0486b7df5197b00ad1ab7584c1164addf25c85a774cbced90c6df",
"0x4f285ca5531b9f4f60731f8cdc78f3999cc631d2ca4a008aa19cff4d6934bee4",
"0x73395898bf70e07f500d9f4ca7aa479ebc8deb7fdbfc3039093c091bdcd1f3c6",
"0x6a5ab1299e48d0cca32e32044b020a31ebd8e5a5ec70edd6d883492e49e92b4e",
"0xd6fd9fd91743a850ac150c2c30406e7d6e817d78ae8ae1bed74fcd2326696dff",
"0x9bf1f8e3bfd08b70cbe46c127e21016dfe42cc9e468d7b91f3dc5086a2b8006d",
"0x318ec6a3f3afcfe8137b2111968ec81f332c7e5e9e16148cce090f844d618dc5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

