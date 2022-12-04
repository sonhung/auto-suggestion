const Product = ({ data = [], onSellect }) => {
  return (
    <div>
      <div className="bg-slate-300 px-2 py-2 uppercase font-normal text-[16px] text-gray-400">
        Product
      </div>
      <div className="py-1">
        {data.map((item) => (
          <div
            key={item._id}
            className="cursor-pointer p-2 flex items-start hover:bg-slate-100 hover:opacity-75"
            onClick={() => onSellect(item)}
          >
            <img
              src={item.image}
              className="w-16 h-20 object-cover"
              alt={item.title}
            />
            <div className="ml-2">
              <div>{item.title}</div>
              <div className="text-gray-400 text-[14px]">{item.brand}</div>
              <div className="font-bold">${item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
