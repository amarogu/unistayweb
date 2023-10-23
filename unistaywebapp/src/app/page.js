import Picker from "./picker";
import NavBar from "./navBar";

export default function Page() {
  return (
    <div className="mx-auto container relative sm:max-w-[516px] md:max-w-[768px] lg:max-w-[1024px] max-h-screen overflow-x-hidden p-5 text-xs font-einaReg dark:text-body-dark box-border text-body-light">
      <NavBar />
      <Picker />
    </div>
  )
}