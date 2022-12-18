import { MoralisNextApi } from '@moralisweb3/next';

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY || '',
  authentication: {
    domain: 'https://eth-boilerplate.vercel.app/',
    uri: process.env.NEXTAUTH_URL || '',
    timeout: 120,
  },
});
