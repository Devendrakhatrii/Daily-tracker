import About from "./pages/About";
import Contact from "./pages/Contact";
import Demp from "./pages/Demp";
import Useeffect from "./pages/Useeffect";

const App = () => {
  const users = [{ name: "lakim" }, { name: "snigdha" }, { name: "raktim" }];
  return (
    <>
      {/* <About />
      <Contact />
      <Demp data={users} /> */}
      <Useeffect />
    </>
  );
};

export default App;
