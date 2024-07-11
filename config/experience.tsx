import { Link } from '@chakra-ui/react'

export type Company = 'Spadasoft' | 'Spadasoft2' | 'PixelMultimedia'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Spadasoft: {
    name: 'Spadasoft Inc. ',
    longName: 'Spadasoft Consulthing Phils. Delivery Center',
    subDetail: 'Software Development Company',
    url: 'https://www.spadasoft.com/',
    position: 'Senior Software Engineer',
    duration: 'Jun 2024 - Present',
    logo: {
      light: '/worked_at_logos/spadasoft/spadasoft.webp',
      dark: '/worked_at_logos/spadasoft/spadasoft.webp',
    },
    roles: [
      <>
        Collaborated on a white label project known as{' '}
        <Link
          aria-label="Tournated"
          href="https://www.tournated.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tournated
        </Link>{' '}
        (sports management system)
      </>,
      <>
        Wrote APIs in Nest.js & Graph QL also integrated on the front-end using
        Apollo client.
      </>,
      <>
        My primary responsibility involved developing entire features from start
        to finish, encompassing all stages of the process from initial
        conception to final implementation and deployment.
      </>,
      <>
        Using a test-driven approach i wrote unit test cases in jest to maintain
        code quality.
      </>,
      <>
        Collaborated closely with the QA team to identify and resolve bugs,
        employing automated testing methodologies to ensure a seamless and
        error-free user experience.
      </>,
      <> Developed chrome extension in React using OpenAI API</>,
    ],
  },
  Spadasoft2: {
    name: 'Spadasoft Inc. ',
    longName: 'Spadasoft Consulthing Phils. Delivery Center',
    subDetail: 'Software Development Company',
    url: 'https://www.spadasoft.com/',
    position: 'Associate Software Engineer',
    duration: 'Jun 2023 - Jun 2024',
    logo: {
      light: '/worked_at_logos/spadasoft/spadasoft.webp',
      dark: '/worked_at_logos/spadasoft/spadasoft.webp',
    },
    roles: [
      <>
        Collaborated on a white label project known as{' '}
        <Link
          aria-label="Tournated"
          href="https://www.tournated.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tournated
        </Link>{' '}
        (sports management system)
      </>,
      <>
        Wrote APIs in Nest.js & Graph QL also integrated on the front-end using
        Apollo client.
      </>,
      <>
        My primary responsibility involved developing entire features from start
        to finish, encompassing all stages of the process from initial
        conception to final implementation and deployment.
      </>,
      <>
        Using a test-driven approach i wrote unit test cases in jest to maintain
        code quality.
      </>,
      <>
        Collaborated closely with the QA team to identify and resolve bugs,
        employing automated testing methodologies to ensure a seamless and
        error-free user experience.
      </>,
      <> Developed chrome extension in React using OpenAI API</>,
    ],
  },
  PixelMultimedia: {
    name: 'PixelMultimedia',
    longName: 'PixelMultimedia Philippines',
    subDetail: 'Optimzed Web Development Solutions',
    url: 'https://pixelwebmultimedia.com/',
    position: 'React.js Developer',
    duration: 'Dec 2021 - Jun 2023',
    logo: {
      light: '/worked_at_logos/pixel-multimedia/pixel-multimedia-light.webp',
      dark: '/worked_at_logos/pixel-multimedia/pixel-multimedia-dark.webp',
    },
    roles: [
      <>Collaborated on B2B projects using React.js and Next.js.</>,
      <>
        Integrated Restful APIs and GraphQL APIs with Redux and Redux Toolkit.
      </>,
      <>
        Designed mobile-responsive UI utilizing Material UI, Tailwind CSS,
        Bootstrap, and Chakra UI.
      </>,
      <>
        Developed mobile responsive UI designs using Material UI, Tailwind CSS,
        Bootstrap & Chakra UI
      </>,
      <>Developed small business websites and startup web applications.</>,
      <>Developed Chrome extension in React for a small startup.</>,
      <>Created custom React.js components and resolved issues efficiently.</>,
      <>Create different Monorepos using (turbo repo).</>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Spadasoft,
  Experiences.Spadasoft2,
  Experiences.PixelMultimedia,
]
