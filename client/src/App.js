import { HomepageDark } from "./homepage";
import { PartyPageDark } from "./party";
import { ListingPageDark } from "./crib";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageDark />} />
        <Route path="/party" element={<PartyPageDark />} />
        <Route path="/crib" element={<ListingPageDark />} />
      </Routes>
    </Router>
  );
}

export default App;
