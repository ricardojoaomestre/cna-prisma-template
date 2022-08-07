import { Box } from "@chakra-ui/react"

import TechStackDisplay from "@components/TechStackDisplay"
import { TechInfo } from "@types"
import { Hero } from "../components/Hero"


const techStack:TechInfo[] = [
  {
    name: 'NextJS',
    link: 'https://nextjs.org/'
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'Chakra-UI',
    link: 'https://chakra-ui.com/'
  },
  {
    name: 'Prisma',
    link: 'https://www.prisma.io/'
  },
  {
    name: 'Formik',
    link: 'https://formik.org/'
  }
]


const Index = () => (
  <Box pt={'30vh'}>
    <Hero title="Create Next App Template" subtitle="A ready to use template based on CNA + Chakra-UI + Typescript + Prisma + Formik" />  
    <Box mt={20}>
    <TechStackDisplay stack={techStack} />
    </Box>
  </Box>
)

export default Index
