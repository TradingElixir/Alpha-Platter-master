import { InjectedConnector } from 'wagmi/connectors/injected';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import { Button, Text, HStack, Avatar, useToast } from '@chakra-ui/react';
import { getEllipsisTxt } from 'utils/format';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { Web3Button } from '@web3modal/react';

const ConnectButton = () => {
  return <Web3Button />;
};

export default ConnectButton;
