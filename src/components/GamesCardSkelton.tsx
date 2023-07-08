import {Skeleton, SkeletonText, Card, CardBody} from '@chakra-ui/react';

export const GamesCardSkelton = () => {
  return (
    <Card>
        <Skeleton height="300px" borderRadius={10} overflow="hidden"/>
        <CardBody>
        <SkeletonText/>
        </CardBody>
    </Card>
    
  )
}
