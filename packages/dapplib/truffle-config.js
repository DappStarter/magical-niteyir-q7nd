require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth rifle company grace slender frame genius'; 
let testAccounts = [
"0x2b431af79aa6f01190237d2312ff796e83d113bb0e258b13395793df661bed52",
"0x62371c93a000440464b44b31d6ec1fa0f05ba2eaef942b710b23b40c35d91490",
"0xcc7e4e4d4ac47a81fd2126008034e8533aa1afee4047c81c430adaf0851b683d",
"0x26232f0ac5d8916cd361165b72f1a24ce849a8743456d0f83e5e31f77d1d0f78",
"0x835c692cfea57f59387d499c61adba97c555186d18408587a92bbf12f56201a8",
"0x5787853fb350683d99ebf9b83374b20ed4e57d9e4a97a05236fb55b34224aac2",
"0x05fac9fd1909805fa757f36180d53528cc0a1d04cf13dc2093ad3282ae5a74de",
"0xf125db97f1416148b771dbdcbe0714b9e752db2b31d472bbd9915b1382546218",
"0xdfebc4e86721f0aa5ab55d0b8672edf0da021b8fd5171f229fdbaecc814a4293",
"0xa0c432cbd40cae7afd03957ace52da972fff0c59d5eb02a0d4380fd210aba0e4"
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

