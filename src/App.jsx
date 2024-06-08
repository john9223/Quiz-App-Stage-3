import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/quiz" component={QuizComponent} />
        <Route path="/result" component={ResultComponent} />
      </Switch>
    </Router>
  );
}

export default App;
