import "./App.css";
import Billing from "./components/Billing";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </header>
        <Billing />
      </div>
    </div>
  );
}

export default App;
