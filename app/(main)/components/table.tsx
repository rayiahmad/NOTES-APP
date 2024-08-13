"use client";
import Link from "next/link";
import { getCatatan } from "../acton";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const DeleteButton = dynamic(() => import("../components/deletebutton"));

interface Catatan {
  id: string;
  title: string;
  body: string;
}

const MyTable = () => {
  const [catatan, setCatatan] = useState<Catatan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCatatan();
        setCatatan(data);
      } catch (err) {
        setError("Terjadi Kesalahan Pada Server");
        console.error("Error fetching catatan:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (catatan.length === 0) {
    return <h1 className="text-center py-10">Tidak Ada Catatan</h1>;
  }

  return (
    <div className="overflow-x-auto py-10">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Judul</Th>
              <Th>Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
          {catatan.map((item) => (
            <Tr key={item.id}>
              <Td>{item.title}</Td>
              <Td className="space-x-2">
                <Link href={`/${item.id}`}>
                  <Button
                    className="py-6 text-sm text-white"
                    size="md"
                    colorScheme="blue"
                  >
                    Lihat
                  </Button>
                </Link>
                <Link href={`/edit/${item.id}`}>
                  <Button
                    className="py-6 text-sm text-white"
                    size="md"
                    colorScheme="green"
                  >
                    Edit
                  </Button>
                </Link>
                <DeleteButton id={item.id} />
              </Td>
            </Tr>
          ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;
