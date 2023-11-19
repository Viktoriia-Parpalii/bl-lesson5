import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { baseCurrencyThunk } from "./redux/thunk";

const HomePage = lazy(() => import("./pages/HomePage"));
const RatesPage = lazy(() => import("./pages/RatesPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      dispatch(baseCurrencyThunk(crd));
    }
    function error(err) {
      console.log("err: ", err);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/rates" element={<RatesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
