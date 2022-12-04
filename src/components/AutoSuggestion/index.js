import React, { useState } from "react";
import cn from "classnames";
import { FiSearch } from "react-icons/fi";

import Spinner from "./Spinner";
import Suggestion from "./SuggestionBlock";
import Collection from "./CollectionBlock";
import Product from "./ProductBlock";

const AutoSuggestion = ({
  inputClassName,
  className,
  searchIcon,
  onChange,
  data = {},
  loading,
  showBlock = ["suggestion", "collection", "product"],
  order = [1, 2, 3],
  numberCharType = 1,
  onSellect = () => null,
  ...rest
}) => {
  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value || "";
    setSearchText(value);
    if (value && value.length % numberCharType === 0) onChange(value);
  };

  const renderSuggestion = () => {
    if (!searchText) return;
    const { suggestion = [], collection = [], product = [] } = data;

    return (
      <div className="absolute top-9 right-0 border border-gray rounded-md w-80">
        {loading && <Spinner />}
        {!loading && (
          <div className="flex flex-col">
            {showBlock.includes("suggestion") && (
              <div className={`order-${order[0]}`}>
                <Suggestion data={suggestion} onSellect={onSellect} />
              </div>
            )}
            {showBlock.includes("collection") && (
              <div className={`order-${order[1]}`}>
                <Collection data={collection} onSellect={onSellect} />
              </div>
            )}
            {showBlock.includes("product") && (
              <div className={`order-${order[2]}`}>
                <Product data={product} onSellect={onSellect} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        className,
        "flex items-center relative rounded-md border border-gray px-2"
      )}
    >
      <div className="mr-2">{searchIcon || <FiSearch />}</div>
      <input
        className={cn("h-8 focus:outline-none w-100", inputClassName)}
        type="search"
        onChange={handleOnChange}
        value={searchText}
        {...rest}
      />
      {renderSuggestion()}
    </div>
  );
};

export default AutoSuggestion;
