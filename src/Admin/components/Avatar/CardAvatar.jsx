import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';
import { AUTO } from '../../../constants/typography';

export default function CardAvatar() {
  const size = '96px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginTop: '-100%',
          borderRadius: '50%',
        }}>
        <Avatar
          src="https://i.pravatar.cc/300"
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
    </Flex>
  );
}