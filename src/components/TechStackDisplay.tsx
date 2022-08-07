import { Grid, GridItem } from '@chakra-ui/react'
import { TechInfo } from '@types'
import React from 'react'
import InfoCard from './InfoCard'

interface Props {
  stack: TechInfo[];
}

function TechStackDisplay(props: Props) {
  const {stack} = props

  return (
    <Grid templateColumns={'repeat(5, 1fr)'} gap={6} mt={8}>
      {stack.map(item => (
        <GridItem>
          <InfoCard {...item}/>
        </GridItem>
      ))}     
    </Grid>
  )
}

export default TechStackDisplay
