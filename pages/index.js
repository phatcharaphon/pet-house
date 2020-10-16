import { useContext } from "react";
import { PageContent } from "../src/components";
import { Filter, CardContainer } from "../src/containers";
import { FirebaseContext } from "../src/context/firebase";

export default function Index() {
  const { profiles } = useContext(FirebaseContext);

  return (
    <PageContent>
      <Filter />
      <CardContainer profileList={profiles} />
    </PageContent>
  );
}
