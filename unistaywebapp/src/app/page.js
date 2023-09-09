import Picker from "./picker";
import NavBar from "./navBar";

export default function Page() {
  return (
    <div className="mx-auto container lg:max-w-[1024px] p-5 h-[100vh] text-sm font-einaReg dark:text-body-dark text-body-light">
      <NavBar />
      <Picker />
    </div>
  )
}