import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../store/themeSlice";
import TodoInput from "./TodoInput";

function TodoHeader() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);

  const handleThemeSwitch = () => {
    dispatch(switchTheme());
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex justify-between items-center py-4 mb-2 lg:mb-12">
        <h2 className="font-bold text-2xl lg:text-3xl tracking-[.4em] text-lt-very-light-gray">
          TODO
        </h2>
        <div onClick={handleThemeSwitch}>
          {theme === "light" && <img src="/images/icon-moon.svg" alt="moon" />}
          {theme === "dark" && <img src="/images/icon-sun.svg" alt="moon" />}
        </div>
      </div>
      <TodoInput />
    </div>
  );
}
export default TodoHeader;
