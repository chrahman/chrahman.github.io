import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/Dev_Abdulrehman',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dev.abdulrehman/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dev-abdulrehman/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/13061529/abdul-rehman',
    icon: FaStackOverflow,
  },
  {
    label: 'Github',
    href: 'https://github.com/chrahman',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/dev_abdulrehman',
    icon: FaDev,
  },
]
