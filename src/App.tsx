import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
    <Grid templateAreas={{
     base : `"nav" "main"`,
      lg: `"nav nav" "aside main"` // large devices are those which are wider than 1024 px
    }}>
      <GridItem area="nav" bg="coral">nav</GridItem>
      <GridItem area="main" bg="dodgerblue">main</GridItem>
      <Show above="lg">
      <GridItem area="aside" bg="gold">aside</GridItem>
      </Show>
      
    </Grid>
  )

}

export default App
