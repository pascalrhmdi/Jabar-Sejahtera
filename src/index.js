import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage, {
  DonationPage,
  EditAkun,
  EventPage,
  ForgotPasswordPage,
  HitungZakatMaalPage,
  LaporanPage,
  LoginPage,
  RegisterPage,
  RiwayatDonasi,
  TentangKami
} from "./pages";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          {/* Authentication Pages */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="lupa-password" element={<ForgotPasswordPage />} />

          <Route path="akun">
            <Route path="edit" element={<EditAkun />} />
            <Route path="riwayat" element={<RiwayatDonasi />} />
          </Route>

          <Route path="donasi" element={<DonationPage />} />

          <Route path="layanan">
            <Route path="hitung-zakat" element={<HitungZakatMaalPage />} />
            <Route path="laporan" element={<LaporanPage />} />
          </Route>

          <Route path="event" element={<EventPage />} />
          <Route path="tentang-kami" element={<TentangKami />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
