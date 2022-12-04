const Suggestion = ({ data = [], onSellect }) => {
  return (
    <div>
      <div className="bg-slate-300 px-2 py-2 uppercase font-normal text-[16px] text-gray-400">
        Suggestion
      </div>
      {data.map((item) => (
        <div
          key={item.name}
          className="cursor-pointer px-2 py-1 hover:bg-slate-100 hover:opacity-75"
          onClick={() => onSellect(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
