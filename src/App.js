import "./App.css";

function App() {
  return (
    //BEM Convention
    <div className="app">
      <div className="app__body">
        <div className="app__top">
          <h2 className="app__top-title">
            Create an account to view <br /> this page
          </h2>
          <p className="app__top-subtitle">Already have account?</p>
        </div>
        <div className="app__center"></div>
        <div className="app__bottom"></div>
      </div>
    </div>
  );
}

export default App;
