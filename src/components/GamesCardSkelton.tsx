import {Skeleton, SkeletonText, Card, CardBody} from '@chakra-ui/react';

export const GamesCardSkelton = () => {
  return (
    <Card>
        <Skeleton/>
        <CardBody>
        <SkeletonText/>
        </CardBody>
    </Card>
    
  )
}
