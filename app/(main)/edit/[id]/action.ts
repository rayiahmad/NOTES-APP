"use server";

import prisma from "@/prisma/database";
import { revalidatePath } from "next/cache";

export async function updateCatatan(id: string, title: string, body: string) {
  try {
    const updatedCatatan = await prisma.catatan.update({
      where: { id },
      data: { title, body },
    });
    revalidatePath("/", "layout")
    return updatedCatatan;
  } catch (error) {
    throw new Error("Terjadi Kesalahan Pada Server");
  }
}

export async function fetchCatatanById(id: string) {
  try {
    const catatan = await prisma.catatan.findUnique({
      where: { id },
    });
    return catatan;
  } catch (error) {
    throw new Error("Terjadi Kesalahan Saat Mengambil Data Catatan");
  }
}