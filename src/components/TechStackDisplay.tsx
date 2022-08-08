import { Grid, GridItem, Icon } from '@chakra-ui/react';
import { SiChakraui, SiTypescript, SiPrisma } from 'react-icons/si';
import { TbBrandNextjs, TbForms } from 'react-icons/tb';

import { TechInfo } from '@types';
import React from 'react';
import InfoCard from './InfoCard';

const techStack: TechInfo[] = [
  {
    name: 'NextJS',
    icon: TbBrandNextjs,
    link: 'https://nextjs.org/',
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Chakra-UI',
    icon: SiChakraui,
    link: 'https://chakra-ui.com/',
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    link: 'https://www.prisma.io/',
  },
  {
    name: 'Formik',
    icon: TbForms,
    link: 'https://formik.org/',
  },
];

function TechStackDisplay() {
  return (
    <Grid templateColumns={'repeat(5, 1fr)'} gap={6} mt={8}>
      {techStack.map((item, idx) => (
        <GridItem key={idx}>
          <InfoCard {...item} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default TechStackDisplay;
