import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiApollographql,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiDocker,
  SiGooglecloud,
  SiGitlab,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiMui,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
  SiChakraui,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree, FaNodeJs } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node',
      icon: FaNodeJs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Graphql (JS)',
      icon: SiGraphql,
    },
    {
      name: 'NestJS',
      icon: SiNestjs,
    },
    {
      name: 'ExpressJS',
      icon: SiExpress,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'Apollo Graphql',
      icon: SiApollographql,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    {
      name: 'SocketIO',
      icon: SiSocketdotio,
    },
    {
      name: 'Google Pubsub',
      icon: SiGooglecloud,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'GitlabCICD',
      icon: SiGitlab,
    },
    {
      name: 'GithubActions',
      icon: SiGithub,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'AntDesign',
      icon: AiOutlineAntDesign,
    },
    {
      name: 'MaterialUI',
      icon: SiMui,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: SiChakraui,
    },
    {
      name: 'TailwindCSS',
      icon: SiTailwindcss,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'SourceTree',
      icon: FaSourcetree,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
  ],
  desktop: [
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
