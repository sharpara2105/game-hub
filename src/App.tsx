import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  return (
    <Grid templateAreas={{
     base : `"nav" "main"`,
      lg: `"nav nav" "aside main"` // large devices are those which are wider than 1024 px
    }}>
      <GridItem area="nav"><NavBar/></GridItem>
      <GridItem area="main" >main</GridItem>
      <Show above="lg">
      <GridItem area="aside" >aside</GridItem>
      </Show>
      
    </Grid>
  )

}

export default App
