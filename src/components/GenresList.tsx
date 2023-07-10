
import useGenres, { Genre } from '../hooks/useGenres'
import { List, ListItem, HStack, Image, Text, Spinner, Button, Heading } from '@chakra-ui/react';

interface Props{
  onSelectGenre: (genre:Genre)=> void;
  selectedGenre: Genre |null
}

const GenresList = ({selectedGenre, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner/>
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data.map(data=> <ListItem key={data.id} paddingY="5px">
          <HStack>
          <Image  objectFit = 'cover' boxSize='32px' borderRadius={8} src={data.image_background}/>
          <Button whiteSpace='normal' textAlign='left' fontWeight={data.id===selectedGenre?.id?'bold':'normal'} onClick={()=> onSelectGenre(data)} fontSize='lg' variant='link'>{data.name}</Button>
          </HStack>
          </ListItem>)}
     </List>
     </>
  )
}

export default GenresList