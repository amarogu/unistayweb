import Picker from "./picker";
import NavBar from "./navBar";

export default function Page() {
  return (
    <div className="mx-auto container lg:max-w-[1024px] p-5 max-h-[100vh] text-xs font-einaReg dark:text-body-dark text-body-light">
      <NavBar />
      <Picker />
    </div>
  )
}