import "./App.css";
import peopleImg from "./assets/people.jpg";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";

function App() {
  return (
    <>
      <section className="container  mx-auto bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="card shadow-xl bg-white text-neutral-900 rounded-sm w-full max-w-md">
          <div className="grid grid-cols-3 grid-rows-4 p-2 gap-2 ">
            <div className="peopleImg">
              <img
                src={peopleImg}
                className="rounded-full h-28 w-28 object-cover object-center"
              />
            </div>
            <div className="peopleText flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold pt-8">Carla Sanchez</h1>
                <p className="opacity-60 text-neutral-400 text-sm">
                  Front End Developer
                </p>
              </div>
              <a
                target="_blank"
                className="cursor-pointer text-xs text-blue-700 "
              >
                carla.sanchez.dev
              </a>
            </div>
            <div className="peopleMedia flex items-end justify-end gap-2">
              <img src={icon1} className="w-6 h-6"></img>
              <img src={icon2} className="w-6 h-6"></img>
            </div>
            <div className="col-span-1"></div>
            <div className="border-t-2 flex items-center">
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">15</h1>
                <p className="text-sm">Jobs Completed</p>
              </div>
            </div>
            <div className="border-t-2 flex items-center">
              <div className="flex flex-col ">
                <h1 className="font-bold text-lg">94%</h1>
                <p className="text-sm">On Time</p>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2 border-t-2 flex items-center">
              <h3 className="text-sm">
                I am an experienced web development with vast experience through
                all my years in this career, hire me, it was going to be your
                best choice in your short life.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
