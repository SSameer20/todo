import {Card, CardBody} from "@nextui-org/react";

export default function CardItem(props : any) {
  return (
    <Card>
      <CardBody>
        <p>{props.task}</p>
      </CardBody>
    </Card>
  )
}
