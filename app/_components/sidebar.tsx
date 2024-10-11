const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* Image */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>

      {/* Buttoms */}
      <div className="flex flex-col gap-2 p-2">
        <button className="px-6 py-3">Dashboad</button>
        <button className="px-6 py-3">Produtos</button>
        <button className="px-6 py-3">Vendas</button>
      </div>
    </div>
  );
};

export default Sidebar;
