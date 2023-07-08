
import useGenres from '../hooks/useGenres'
import { List, ListItem, HStack, Image, Text, Spinner } from '@chakra-ui/react';

const GenresList = () => {
    const {data, isLoading, error} = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner/>
  return (
    <List>
        {data.map(data=> <ListItem key={data.id} paddingY="5px">
          <HStack>
          <Image boxSize='32px' borderRadius={8} src={data.image_background}/>
          <Text fontSize='lg'>{data.name}</Text>
          </HStack>
          </ListItem>)}
     </List>
  )
}

export default GenresList