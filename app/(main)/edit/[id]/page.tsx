import dynamic from "next/dynamic";
import { updateCatatan } from "./action";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const FormEdit = dynamic(() => import("./components/form"));

const Edit = async ({ params }: { params: { id: string } }) => {
  try {
    const data = await updateCatatan(params.id);
    if (data) {
      return (
        <main className="w-full bg-gray-100 min-h-screen justify-center flex">
          <div className="w-full p-10">
            <div className="p-10 rounded-lg bg-white">
              <Link href="/">
                <Button className="py-6 my-5 text-sm text-blue-700" size="md">
                  Kembali
                </Button>
              </Link>
              <FormEdit
                id={data.id}
                initialValues={{ title: data.title, body: data.body }}
              />
            </div>
          </div>
        </main>
      );
    } else {
      return <h1>Catatan tidak ditemukan!</h1>;
    }
  } catch (error) {
    console.error("Error fetching Catatan:", error);
    return <div>Terjadi Kesalahan Saat Load Catatan</div>;
  }
};

export default Edit;
