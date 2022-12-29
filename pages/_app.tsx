import React from 'react';
import dynamic from 'next/dynamic';
import { ChakraProvider } from '@chakra-ui/react';
import { createClient, WagmiConfig } from 'wagmi';
import { configureChains } from '@wagmi/core';
import { Web3Modal } from '@web3modal/react';
import { extendTheme } from '@chakra-ui/react';

import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum';
import {
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  fantom,
  fantomTestnet,
  foundry,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  sepolia,
} from '@wagmi/core/chains';

import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

const endpoint = 'https://ssc-dao.genesysgo.net';

const chains = [
  mainnet,
  goerli,
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  fantom,
  fantomTestnet,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: '6a040cc3ef7f834f3dab245454b7f76d' }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
        <Web3Modal projectId="6a040cc3ef7f834f3dab245454b7f76d" ethereumClient={ethereumClient} />
      </SessionProvider>
    </ChakraProvider>
  );
};

export default MyApp;
