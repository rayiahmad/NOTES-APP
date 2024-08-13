"use server";

import prisma from "@/prisma/database";

export async function getCatatanById(id: string) {
  try {
    const data = await prisma.catatan.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        body: true,
        createAt: true,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Terjadi Kesalahan Pada Server");
  }
}
