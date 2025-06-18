export default function Home() {
  return (
    <div className="bg-black h-full w-full flex items-center justify-center">
      <div className="h-full w-full max-w-[100vh] bg-amber-50 grid grid-cols-4 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4">
            <div className="bg-gray-800 sm:col-span-2"></div>
            <div className="bg-gray-800 col-span-3 sm:row-span-2 sm:col-span-1"></div>
            <div className="bg-gray-800 col-span-4 sm:row-span-2 sm:col-span-1"></div>
            <div className="bg-gray-800 row-span-2 col-span-2 sm:row-span-1 sm:col-span-1"></div>
            <div className="bg-gray-800 row-span-2 col-span-2 sm:col-span-2"></div>
      </div>
    </div>
  );
}
