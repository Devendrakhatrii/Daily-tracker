function App() {
  return (
    <>
      <form action="/action_page.php">
        <label>First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label>Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
