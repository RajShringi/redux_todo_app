import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoHeader from "./components/TodoHeader";
import Todos from "./components/Todos";

function App() {
  const { theme } = useSelector((state) => state);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="bg-lt-very-light-gray transition dark:bg-dt-very-dark-blue text-lt-very-dark-grayish-blue dark:text-dt-light-grayish-blue h-screen font-josefin_sans relative text-xs lg:text-sm ">
      <div className="min-h-[300px] bg-mobile-light dark:bg-mobile-dark md:bg-desktop-light md:dark:bg-desktop-dark bg-no-repeat bg-contain lg:bg-cover lg:bg-center"></div>
      <div className="min-h-[400px] absolute left-0 right-0 top-0 lg:top-[4%] p-4">
        <TodoHeader />
        <Todos />
      </div>
    </div>
  );
}
export default App;
