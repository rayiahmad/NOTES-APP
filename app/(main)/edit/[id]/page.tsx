import dynamic from "next/dynamic";
import { fetchCatatanById, updateCatatan } from "./action";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const FormEdit = dynamic(() => import("./components/form"));

const Edit = async ({ params }: { params: { id: string } }) => {
  try {
    // Fetch the existing catatan by ID
    const data = await fetchCatatanById(params.id);
    
    if (!data) {
      return <h1>Catatan tidak ditemukan!</h1>;
    }

    // Handle form submission to update catatan
    const handleFormSubmit = async (values: { title: string; body: string }) => {
      try {
        const updatedData = await updateCatatan(params.id, values.title, values.body);
        console.log("Catatan updated:", updatedData);
        // You can add a redirect or a success message here
      } catch (error) {
        console.error("Error updating Catatan:", error);
        // Handle error, e.g., show an error message
      }
    };

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
  } catch (error) {
    console.error("Error fetching Catatan:", error);
    return <div>Terjadi Kesalahan Saat Load Catatan</div>;
  }
};

export default Edit;
