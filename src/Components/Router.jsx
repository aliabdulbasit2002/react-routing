import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../Layout/RootLayout";
import ServiceLayout from "../Layout/ServiceLayout";

// Pages
import ServiceDetails, { serviceDetailsLoader } from "./ServiceDetails";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services, { ServiceLoader } from "../Pages/Services";
import Error404 from "../Components/Error404";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route path="services" element={<ServiceLayout />}>
        <Route index element={<Services />} loader={ServiceLoader} />
        <Route
          path=":id"
          element={<ServiceDetails />}
          loader={serviceDetailsLoader}
        />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Route>
  )
);
