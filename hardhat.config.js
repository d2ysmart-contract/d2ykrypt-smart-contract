// require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.9',
	networks: {
		rinkeby: {
			url: 'https://eth-rinkeby.alchemyapi.io/v2/o4Y7lzyyEUszD3F182jHTu42nXsJfWEC',
			accounts: ['f43fb8198a00c2bb15163142849eaa480b2143215e88d7fc589a5822951971d1'],
		},
	},
};
