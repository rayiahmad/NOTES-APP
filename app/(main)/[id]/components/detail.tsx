"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface Catatan {
  id: string;
  title: string;
  body: string;
  createAt: string;
}

interface DetailProps {
  data: Catatan;
}

export default function Detail({ data }: DetailProps) {
  console.log("CreatedAt:", data.createAt);

  const parsedDate = new Date(data.createAt);
  const isValidDate = !isNaN(parsedDate.getTime());

  return (
    <main className="w-full bg-gray-100 min-h-screen justify-center flex">
      <main className="w-full p-10">
        <div className="p-10 rounded-lg bg-white">
          <Link href="/">
            <Button className="py-6 my-5 text-sm text-blue-700" size="md">
              Kembali
            </Button>
          </Link>
          <div>
            <h1 className="font-semibold text-black text-3xl">{data.title}</h1>
            <h1 className="font-normal text-gray-400 text-sm">
              {isValidDate
                ? parsedDate.toLocaleDateString()
                : "Tanggal tidak valid"}
            </h1>
          </div>
          <p className="py-10 font-medium text-black text-xl">{data.body}</p>
        </div>
      </main>
    </main>
  );
}
