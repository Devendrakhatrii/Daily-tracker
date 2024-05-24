import { ThemeProvider } from "./context/theme-context";
import Recipe from "./Recipe";

function App() {
  return (
    <>
      <ThemeProvider>
        <Recipe />
      </ThemeProvider>
    </>
  );
}

export default App;
