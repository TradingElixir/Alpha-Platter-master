import { ButtonGroup, Container, IconButton, Stack, Text} from '@chakra-ui/react'
import * as React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return(
  <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="right">
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/company/platterfinance/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.5rem" />}
          />
          <IconButton 
            as="a" 
            href="https://instagram.com/platterfinance?igshid=YTY2NzY3YTc=" 
            aria-label="Instagram" 
            icon={<FaInstagram fontSize="1.5rem" />}
           />
          <IconButton
            as="a"
            href="https://twitter.com/PlatterFinance"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.5rem" />}
          />
        </ButtonGroup>
        <Text fontSize="large" color="subtle">
        &copy; {new Date().getFullYear()} Platter Finance, Inc.
        All rights reserved.
        </Text>
      </Stack>
     
    </Stack>
  </Container>
)};
export default Footer;