const Main = () => {
  return (
    <div className="mt-10 flex h-[80vh] flex-col items-center justify-center rounded-2xl bg-[#6093A4]">
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button className="cursor-pointer rounded-lg bg-[#F7B32B] px-4 py-2 text-xl font-semibold text-[#6093A4]">
          Duas Linhas
        </button>
        <button className="cursor-pointer rounded-lg bg-[#F7B32B] px-4 py-2 text-xl font-semibold text-[#6093A4]">
          Três Linhas
        </button>
      </div>

      <div className="m-4 grid grid-cols-3 gap-4 border-3 border-[#F7B32B] p-4 h-[20vh]">
        <input type="text" className="border-[#F7B32B] p-2" placeholder="A1" />
        <input type="text" className="border-[#F7B32B] p-2" placeholder="A2" />
        <input type="text" className="border-[#F7B32B] p-2" placeholder="A3" />
        <input type="text" className="border-[#F7B32B] p-2" placeholder="B1" />
        <input type="text" className="border-[#F7B32B] p-2" placeholder="B2" />
        <input type="text" className="border-[#F7B32B] p-2" placeholder="B3" />
      </div>
    </div>
  );
};

export default Main;