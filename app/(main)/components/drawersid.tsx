import Link from "next/link";

const DrawerSide = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu pt-20 bg-blue-700 text-white min-h-full w-80 p-4">
        <h1 className="font-semibold my-5 text-white text-2xl">Note Apps</h1>
        <li>
          <Link href="/" className="font-normal text-md py-5 rounded-lg">Daftar Catatan</Link>
        </li>
      </ul>
    </div>
  );
};
export default DrawerSide;
