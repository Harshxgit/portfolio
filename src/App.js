import "./App.css";
import Threads from "./component/Threads";
import GradientText from "./component/TextAnimations/GradientText/GradientText";
import ShinyText from "./component/TextAnimations/ShinyText/ShinyText";
import Marquee from "./component/TextAnimations/marquee";
import About from "./component/about";
function App() {
  return (
    <div className="bg-black">
    <div className="w-full h-screen relative bg-black">
 

     
      <div className="w-full h-screen flex md:flex-row flex-col justify-center md:space-x-56 items-center text-white ">
        {/* left side  */}
        <div className="md:w-1/3  md:aspect-square">
          <div>
            <h1 className="text-5xl md:text-8xl font-bold ">Hi i'm Caruna</h1>

            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={4}
              showBorder={false}
              className="custom-class md:text-4xl m-2 "
            >
              I m a GRAPHIC DESIGNER
            </GradientText>
          </div>
          <div className="mt-6 p-2">
            loremfdfsf asfddfthisek kdiwobx ksdhiek ksd hfj dtis thakskjd
            laksejkjsdkfja kjsdfjsdlfsdfjkl dnfdjfhdsjklfds sdfdsfdsfdsfdsdsfs
            dgfdgrse fgdgfgdfgfdger
          </div>
          <button className="cursor-pointer border rounded-lg p-2 m-2">
            {" "}
            <ShinyText
              text="Contact Me"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </button>
        </div>

        {/* right side */}
        <div className=" grid p-4 gap-8 grid-cols-6 w-full  md:w-1/3 relative aspect-square backdrop-blur-xl">
          <div className="border rounded-lg col-span-3 ">1</div>
          <div className="border rounded-lg col-span-3">2</div>
          <div className="border rounded-lg col-span-4">3</div>
          <div className="border rounded-lg col-span-2">4</div>
        </div>
      </div>
     
      {/* <Marquee className="absolute bottom-0"/> */}
      <Threads
        className="w-full h-screen absolute top-0 left-0"
        amplitude={0.9}
        distance={1.2}
        enableMouseInteraction={true}
        />
        </div>
        <About/>
    </div>
  );
}

export default App;
