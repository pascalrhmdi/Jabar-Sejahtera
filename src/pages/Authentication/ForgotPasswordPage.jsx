import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [pertanyaan, setPertanyaan] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
  }

  function onChangeSelect(e) {
    setPertanyaan(e.target.value);
  }

  return (
    <div className="container-lg d-flex justify-content-center align-items-center">
      <div className="col-6 p-4 rounded-4 shadow-app my-4 bg-white">
        <h2 className="mb-">Lupa Password</h2>
        <hr />
        <p className="mb-3 fw-semibold">
          Masukkan email anda, lalu jawab pertanyaan yang dulu pernah anda isi. Setelah itu masukkan kata sandi baru yang akan anda pakai.
        </p>
        <form onSubmit={onSubmitHandler} autoComplete="on">
          {/* Email  */}
          <div className="mb-4 ">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailhelp"
              placeholder="Masukkan email anda..."
              required
            />
          </div>
          {/* Select Pertanyaan Pribadi  */}
          <div className="mb-4">
            <label htmlFor="pertanyaan" className="form-label">
              Pertanyaan<span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              name="pertanyaan"
              id="pertanyaan"
              value={pertanyaan}
              onChange={onChangeSelect}
              aria-describedby="pertanyaanHelpId"
              required>
              <option value="" disabled>
                Pilih Pertanyaan...
              </option>
              <option value="1">Siapa nama Ibumu?</option>
              <option value="2">Siapa nama mantan terbaik?</option>
              <option value="3">Gajelasssssss?!?!?!?!</option>
            </select>
          </div>
          {/* Input text Jawaban Pribadi */}
          <div className="mb-4">
            <label htmlFor="jawaban_pribadi" className="form-label">
              Jawaban Pribadi<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="jawaban_pribadi"
              id="jawaban_pribadi"
              aria-describedby="jawaban_pribadihelp"
              placeholder="Masukkan jawaban anda..."
              required
            />
          </div>
          {/* Password Baru */}
          <div className="mb-4">
            <label htmlFor="new_password" className="form-label">
              Kata Sandi Baru<span className="text-danger">*</span>
            </label>
            <input type="new_password" className="form-control" name="new_password" id="new_password" placeholder="**********" required />
          </div>
          {/* Password Confirmation */}
          <div className="mb-4">
            <label htmlFor="password_confirm" className="form-label">
              Konfirmasi Kata Sandi Baru<span className="text-danger">*</span>
            </label>
            <input type="password" className="form-control" name="password_confirm" id="password_confirm" placeholder="**********" required />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg" type="button">
              Reset
            </button>
          </div>
        </form>
        <div className="text-end mt-3">
          <p className=" my-1 text-end">
            Sudah Punya Akun? <Link to="../login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
