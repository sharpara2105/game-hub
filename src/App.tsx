import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

export interface GameQuery {
  genre: Genre |null;
  platform: Platform | null
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
      <GridItem area="nav"><NavBar/></GridItem>
      <GridItem area="main" >
        <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}></PlatformSelector>
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
