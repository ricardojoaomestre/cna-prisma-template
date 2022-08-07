import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Grid, Link, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  name: string;
  description?: string;
  link: string;
}

function InfoCard(props: Props) {
  const {name, description, link} = props

  return (
    <Grid templateRows={'repeat(2, 1fr)'} height={'150px'} py={4} px={8} textAlign='center' alignItems={'center'} rounded={8} background={'messenger.600'} textColor={'white'}>
        <Box>
        <Text fontSize={'lg'} fontWeight='bold'>{name}</Text>
        {description && <Text size={'md'} color={'gray.600'}>{description}</Text>}
        </Box>
        <Link href={link}>
          <ExternalLinkIcon />
          Link
        </Link>

    </Grid>
  )
}

export default InfoCard
