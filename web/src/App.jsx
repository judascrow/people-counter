import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "./firebase";
import {
  Center,
  CircularProgress,
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";

const App = () => {
  const [peopleCouter, setPeopleCouter] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let list = [];
      try {
        const query = await ref(db, "people_counter");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
          if (snapshot.exists()) {
            Object.values(data).map((p) => {
              list.push(p);
            });
            setPeopleCouter(list);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  // console.log(peopleCouter);

  return (
    <Container maxW="container.lg">
      {peopleCouter.length > 0 ? (
        <TableContainer maxWidth="100%">
          <Table variant="simple">
            <TableCaption placement="top">PEOPLE COUNTER</TableCaption>
            <Thead bg={"teal.300"}>
              <Tr>
                <Th>Start Time</Th>
                <Th>End Time</Th>
                <Th isNumeric>Total IN</Th>
                <Th isNumeric>Total OUT</Th>
                <Th isNumeric>Diff</Th>
              </Tr>
            </Thead>
            <Tbody>
              {peopleCouter.map((p, key) => (
                <Tr key={key}>
                  <Td>
                    {moment(p.startTime).format("MMMM Do YYYY, h:mm:ss a")}
                  </Td>
                  <Td>{moment(p.endTime).format("MMMM Do YYYY, h:mm:ss a")}</Td>
                  <Td isNumeric color="green">
                    {p.totalIn}
                  </Td>
                  <Td isNumeric color="blue">
                    {p.totalOut}
                  </Td>
                  <Td isNumeric color="red">
                    {p.totalIn - p.totalOut}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Center mt={5}>
          <CircularProgress isIndeterminate color="green.300" />
        </Center>
      )}
    </Container>
  );
};

export default App;
