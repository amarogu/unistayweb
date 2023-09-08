import Picker from "./picker";
import NavBar from "./navBar";

export default function Page() {
  return (
    <div className="mx-auto container p-5 h-[100vh] text-sm font-einaReg dark:text-body-dark-emphasized text-body-light">
      <NavBar />
      <Picker />
    </div>
  )
}