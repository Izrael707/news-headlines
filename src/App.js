import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { TopStories } from "./pages/TopStories";
import { Contact } from "./pages/Contact";

function App() {
  const [allNews, setAllNews] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(
      "https://api.thenewsapi.com/v1/news/all?locale=gb&language=en&api_token=8bj0O5ExwLwHBF4EhSJmNmrGMGeSdxBYQN512R7h&language=en&limit=4"
    )
      .then((res) => res.json())
      .then((result) => setAllNews(result.data))
      .catch((error) => setError(error));
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home allNews={allNews} error={error} />
          </Route>
          <Route path="/tops" exact>
            <TopStories />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
