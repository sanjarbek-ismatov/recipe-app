import Ui from "./components/ui";
import { useEffect, useState } from "react";
export type fetchType = {
  hits: [];
};
function App() {
  const [text, setText] = useState<string>("plov");
  const [array, setArray] = useState<fetchType | undefined>();
  let url = `https://api.edamam.com/search?q=${text}&app_id=3c9f0985&app_key=b2f4f7856dfc35e9de885c966e3f7608`;
  const fetchr = async (url: string) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArray(data);
      });
    setText("");
  };
  useEffect(() => {
    fetchr(url);
  }, []);
  return (
    <Ui
      handleChange={(e) => {
        setText(e.target.value);
      }}
      handleClick={() => fetchr(url)}
      text={text}
      array={array}
    />
  );
}

export default App;
