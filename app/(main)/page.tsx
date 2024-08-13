import { Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Table = dynamic(() => import("@/app/(main)/components/table"));

export default function Home() {
  return (
    <main className="w-full bg-gray-100 min-h-screen justify-center flex">
      <div className="w-full p-10">
        <div className="p-10 rounded-lg bg-white">
          <Link href="/tambah">
            <Button
              className="py-6 text-sm text-white"
              size="md"
              colorScheme="blue"
            >
              + Tambah Catatan
            </Button>
          </Link>
          <Table />
        </div>
      </div>
    </main>
  );
}
