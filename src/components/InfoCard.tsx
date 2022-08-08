import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Grid, Icon, Link, Text } from '@chakra-ui/react';
import { TechInfo } from '@types';
import React from 'react';

function InfoCard(props: TechInfo) {
  const { name, icon, link } = props;

  return (
    <Grid
      templateRows={'repeat(2, 1fr)'}
      height={'150px'}
      py={4}
      px={8}
      textAlign="center"
      alignItems={'center'}
    >
      <Box>
        <Icon as={icon} fontSize={60} mb={4} />
        <Link href={link}>
          <Text fontSize={30} fontWeight="bold">
            {name}
          </Text>
        </Link>
      </Box>
    </Grid>
  );
}

export default InfoCard;
