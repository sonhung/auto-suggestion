const boldedText = (text = "", searchtext = "") => {
  const textArray = text.split(searchtext);
  return (
    <span>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && <b>{searchtext}</b>}
        </>
      ))}
    </span>
  );
};

const Suggestion = ({ data = [], onSellect, searchText }) => {
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
          {boldedText(item.name, searchText)}
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
