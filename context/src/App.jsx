import "./App.css";
import CompA from "./components/CompA";
import UserConsumer from "./contextapi";

function App() {
  return (
    <>
      <UserConsumer>
        <CompA />
      </UserConsumer>
    </>
  );
}

export default App;
