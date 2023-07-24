import "react-loading-skeleton/dist/skeleton.css";
import { ProductList } from "./components";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-5">
      <ProductList/>
    </div>
  );
}

export default App;
