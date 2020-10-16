import React from "react";
import { useRouter } from "next/router";
import { Card } from "../components";

import * as ROUTES from "../constants/routes";

export default function CardContainer({ profileList }) {
  const router = useRouter();

  return (
    <Card.Container>
      {profileList.map((profile) => (
        <Card
          key={profile.docId}
          onClick={() => router.push(`${ROUTES.PROFILE}/${profile.docId}`)}
        >
          <Card.Image src={profile.img} />
          <Card.Title>{profile.title}</Card.Title>
          <Card.Location>{profile.location}</Card.Location>
          <Card.PriceRate>{profile.price_rate} บาท/วัน</Card.PriceRate>
        </Card>
      ))}
    </Card.Container>
  );
}
