import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
  return (
    // when rendered Box ( primitive component in chakra returns a div)
    <Box width ="100%" borderRadius={10} overflow='hidden'> 
    {children}
    </Box>
  )
}

export default GameCardContainer