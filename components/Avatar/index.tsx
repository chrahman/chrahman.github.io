import {
  Box,
  Image as ChkImage,
  Text,
  Link,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { avatarAnimation } from 'config/animations'

const AvatarImages = {
  DarkMode: '/abdultehman-avatar.jpg',
  LightMode: './abdultehman-avatar.jpg',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)
  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )
  useEffect(() => {
    // Some nice preloading and caching
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      return img
    })
    window.preloadedPictures = preloadedImages
  }, [])
  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src={imgAvatar}
          alt="Abdul Rehman Avatar"
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          borderRadius="full"
          fallback={<SkeletonCircle height="100%" width="100%" />}
        />
        <Text textAlign="center" fontSize="smaller" variant="description">
          Muhammad{' '}
          <Link
            href="https://github.com/chrahman/"
            target="_blank"
            aria-label="Abdul Rehman Github Profile"
            rel="noreferrer"
          >
            Abdul Rehman
          </Link>
        </Text>
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
