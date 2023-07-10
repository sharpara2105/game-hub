import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre |null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}



function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    //base has 2 rows : main and nav | 1 col
    // lg has 2 rows and 2 cols
    <Grid templateAreas={{
     base : `"nav" "main"`,
      lg: `"nav nav" "aside main"` // large devices are those which are wider than 1024 px
    }}
    templateColumns={{
      // 1fr means take all the available space
      base: '1fr',
      lg:'200px 1fr'
    }}
    >
      <GridItem area="nav"><NavBar onSearch={(searchText)=>setGameQuery({...gameQuery, searchText})}/></GridItem>
      <GridItem area="main" >
        <HStack spacing={5} paddingLeft={2} marginBottom= {5}>
          <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}></PlatformSelector>
          <SortSelector sortOrder = {gameQuery.sortOrder } onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={5} >
        <GenresList selectedGenre= {gameQuery.genre} onSelectGenre={(genre=>setGameQuery({...gameQuery, genre}))}/>
      </GridItem>
      </Show>
      
    </Grid>
  )

}

export default App
