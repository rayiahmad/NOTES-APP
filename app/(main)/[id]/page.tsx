import dynamic from "next/dynamic";
import { getCatatanById } from "./action";

const Detail = dynamic(() => import("@/app/(main)/[id]/components/detail"));

const Detailpage = async ({ params }: { params: { id: string } }) => {
  try {
    const data = await getCatatanById(params.id);
    if (data) { 
      return (
        <main className="w-full flex justify-center bg-gray-50 px-5">
          <Detail data={data} />
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

export default Detailpage;
