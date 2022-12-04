import AutoSuggestion from "./components/AutoSuggestion";
import { useSearch } from "./hooks/api";

function App() {
  const [doSearch, data, loading] = useSearch();

  const onChange = (search) => {
    doSearch(search);
  };

  const onSellect = (item) => {
    console.log(item);
  };

  return (
    <div>
      <header className="flex justify-between p-3">
        <div className="font-bold">Auto Suggestion</div>
        <AutoSuggestion
          data={data}
          loading={loading}
          showBlock={["suggestion", "collection", "product"]}
          order={[1, 2, 3]}
          numberCharType={1}
          onChange={onChange}
          onSellect={onSellect}
        />
      </header>
    </div>
  );
}

export default App;
