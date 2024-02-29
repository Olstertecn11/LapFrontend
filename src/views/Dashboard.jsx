import GridCardList from "../components/GridCardList";
import { Stack, Heading, Text, Container } from "@chakra-ui/react";
import useSession from "../hooks/useSession";

const Dashboard = () => {




  return (
    <div style={{ background: '#b6d0d6', height: '100%' }}>
      <GridCardList />
    </div>
  )
}


export default Dashboard;
