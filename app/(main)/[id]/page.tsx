import { getCatatanById } from "./action";
import Detail from "./components/detail";

const Detailpage = async ({ params }: { params: { id: string } }) => {
  try {
    const data = await getCatatanById(params.id);

    if (data) {
      // Convert the Date to a string
      const formattedData = {
        ...data,
        createAt: data.createAt.toISOString(), // Converts Date to ISO string
      };

      return (
        <main className="w-full flex justify-center bg-gray-50 px-5">
          <Detail data={formattedData} />
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