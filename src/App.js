import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>im the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};
const Shop = () => {
  return <h1>im in shop page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/* /home/shop */}
      </Route>
    </Routes>
  );
};

export default App;
