import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/platter-dark.png' : '/platter-dark.png'}
      height={45}
      width={150}
      alt="Platter"
    />
  );
};

export default MoralisLogo;
