import { Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Form = dynamic(() => import("@/app/(main)/components/form"));

export default function Tambah() {
  return (
    <main className="w-full bg-gray-100 min-h-screen justify-center flex">
      <main className="w-full p-10">
        <div className="p-10 rounded-lg bg-white">
          <Link href="/">
            <Button
              className="py-6 my-5 text-sm text-blue-700"
              size="md"
            >
              Kembali
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Tambah Catatan</h1>
          <h1 className="text-sm text-gray-400">
            isi inputan sesuai yang kau inginkan.
          </h1>
          <Form />
        </div>
      </main>
    </main>
  );
}
