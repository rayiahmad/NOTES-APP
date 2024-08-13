"use server"

import prisma from "@/prisma/database"
import { revalidatePath } from "next/cache"

export async function getCatatan() {
    try {
        const data = prisma.catatan.findMany()
        return data
    } catch (error) {
        throw new Error("Terjadi Kesalahan Pada Server")
    }
}
export async function deleteCatatan(id: string) {
    try {
        const deleteData = await prisma.catatan.delete({
            where: {id}
        })
        revalidatePath("/", "layout")
        return deleteData
    } catch (error) {
        throw new Error("Kesalahan Pada Server")
    }
}