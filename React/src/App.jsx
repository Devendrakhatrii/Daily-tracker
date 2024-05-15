import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const detail =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rem nobis facilis tenetur dignissimos porro quia dolorum. Perferendis eveniet, ducimus sit iste veritatis totam, rem repellat consequatur repudiandae dolores cum.";
  return (
    <>
      <About info={detail} />
      <Contact />
    </>
  );
};

export default App;
