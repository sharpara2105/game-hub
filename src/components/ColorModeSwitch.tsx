import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react'
import React from 'react'

export const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
        <Switch  colorScheme='green' isChecked={colorMode==='dark'} onChange={toggleColorMode}> </Switch>
        <Text>Dark Mode</Text>
    </HStack>
  )
}
