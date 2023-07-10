import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectSortOrder: (sortOrder: string)=> void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
    const sortOrders = [
        {value:'', label: 'Relevanve'},
        {value:'-added', label: 'Date added'},
        {value:'name', label: 'Name'},
        {value:'-released', label: 'Release date'},
        {value:'-metacritic', label: 'Popularity'},
        {value:'-rating', label: 'Average rating'}
    ]
    const currentSortOrder = sortOrders.find((item)=> item.value===sortOrder)

    return (
      <Menu>
          <MenuButton as= {Button} rightIcon={<BsChevronDown/>}>Order By: {currentSortOrder?.label|| "Relevance"}</MenuButton>
          <MenuList>
              {sortOrders.map((obj)=><MenuItem onClick={()=> onSelectSortOrder(obj.value) } as={Button} key={obj.label}>{obj.label}</MenuItem>)}
          </MenuList>
           </Menu>
    )
  
}

export default SortSelector