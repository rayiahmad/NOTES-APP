"use server"
import prisma from "@/prisma/database"

export async function createCatatan(id : string, title : string, body: string) {
    try {
        const data = prisma.catatan.create({
            data :{
                id,
                title,
                body
            }
        })
        return data
    } catch (error) {
        throw new Error("Terjadi Kesalahan Pada Server")
    }
    
}