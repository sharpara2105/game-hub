import {Text, SimpleGrid} from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import { GamesCardSkelton } from './GamesCardSkelton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props{
  gameQuery: GameQuery;
}

export const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
   
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg: 3, xl:4}} padding= '10px' spacing = {6}>
      {isLoading && skeletons.map((skeleton)=> (
      <GameCardContainer key={skeleton}>
        <GamesCardSkelton key={skeleton}/>
        </GameCardContainer>))}
      {data.map((game)=>(
      <GameCardContainer key={game.id}>
        <GameCard key={game.id} game={game}/> 
         </GameCardContainer>))}
    </SimpleGrid>
    
    </>
  );
}
