import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { TbBrandNextjs } from 'react-icons/tb';

const Header = () => {
  return (
    <Box position={'fixed'} top={0} width={'100%'} boxShadow={'base'} py={4} px={10} bg={'black'}>
      <Link href="/">
        <Button leftIcon={<TbBrandNextjs />} colorScheme={'whiteAlpha'}>
          Home
        </Button>
      </Link>
    </Box>
  );
};

export default Header;
