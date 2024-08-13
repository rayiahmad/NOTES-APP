"use client";

import { useState } from "react";
import { deleteCatatan } from "../acton";
import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";

const DeleteButton = ({ id }: { id: string }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const onClick = async () => {
    if (confirm("Apakah Anda yakin ingin menghapus catatan ini?")) {
      setIsDeleting(true);
      try {
        await deleteCatatan(id);
        alert("Data berhasil dihapus");
        window.location.reload();
      } catch (error) {
        alert("Terjadi Kesalahan Pada Server");
        console.error("Error deleting catatan:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <>
      <Button
        onClick={onClick}
        disabled={isDeleting}
        className="py-6 text-sm"
        colorScheme={`${isDeleting ? "teal" : "red"}`}
        size="md"
      >
        {isDeleting ? <span className="loading">Loading...</span> : "Hapus"}
      </Button>
    </>
  );
};

export default DeleteButton;
