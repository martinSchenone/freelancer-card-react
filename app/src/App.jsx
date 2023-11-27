import "./App.css";
import peopleImg from "./assets/people.jpg";
function App() {
  return (
    <>
      <section className="container max-w-2xl mx-auto bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="card shadow bg-white text-neutral-900 rounded-sm w-full max-w-sm">
          <div className="grid grid-cols-3 grid-rows-3 p-2 ">
            <div className="peopleImg">
              <img src={peopleImg} />
            </div>
            <div className="peopleText flex flex-col">
              <h1 className="">Carla Sanchez</h1>
              <p>Front End Developer</p>
              <a target="_blank">carla.sanchez.dev</a>
            </div>
            <div className="peopleMedia"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
