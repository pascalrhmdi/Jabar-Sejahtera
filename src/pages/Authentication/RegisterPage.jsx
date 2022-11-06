import { useState } from "react";
import { Link } from "react-router-dom";
import { logoJabarSejahtera } from "../../assets";

export default function RegisterPage() {
  const [selected, setSelected] = useState("");

  function handleSelectChange(event) {
    setSelected(event.target.value);
  }

  function registerAction(e) {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirm: e.target.password_confirm.value,
      name: e.target.name.value,
      phone: `62${e.target.phonenumber.value}`,
      role: selected,
      pertanyaan: e.target.pertanyaan.value,
      jawaban_pribadi: e.target.jawaban_pribadi.value,
    };
  }

  return (
    <div className="container-lg d-flex justify-content-center align-items-center">
      <div className="col-10 col-md-8 col-lg-6 p-4 rounded-4 shadow-app my-4 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Daftar</h2>
          <img
            className="img-fluid img-footer"
            src={logoJabarSejahtera}
            alt="Logo Jabar Sejahtera"
          />
        </div>
        <form onSubmit={registerAction} autoComplete="on">
          <h6 className="">Data Pribadi</h6>
          {/* Email  */}
          <div className="mb-3 ms-2">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailhelp"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          {/* Nama  */}
          <div className="mb-3 ms-2">
            <label htmlFor="name" className="form-label">
              Nama<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              aria-describedby="namehelp"
              placeholder="John Doe"
              required
            />
          </div>
          {/* No. HP  */}
          <div className="mb-3 ms-2">
            <label htmlFor="phonenumber" className="form-label">
              No.HP<span className="text-danger">*</span>
            </label>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="nominal">
                +62
              </span>
              <input
                type="tel"
                className="form-control"
                name="phonenumber"
                id="phonenumber"
                aria-describedby="nohphelp"
                placeholder="8986866875"
                aria-label="nominal"
                required
              />
            </div>
          </div>
          {/* Password  */}
          <div className="mb-3 ms-2">
            <label htmlFor="password" className="form-label">
              Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="**********"
              required
            />
          </div>
          {/* Password Confirmation  */}
          <div className="mb-3 ms-2">
            <label htmlFor="password_confirm" className="form-label">
              Konfirmasi Kata Sandi<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              name="password_confirm"
              id="password_confirm"
              placeholder="**********"
              required
            />
          </div>
          <h6 className="mt-3">Pertanyaan Pribadi</h6>
          {/* create form select Pertanyaan Pribadi  */}
          <div className="mb-3 ms-2">
            <label htmlFor="pertanyaan" className="form-label">
              Pertanyaan<span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              value={selected}
              onChange={handleSelectChange}
              name="pertanyaan"
              id="pertanyaan"
              required
            >
              <option value="" disabled>
                Pilih Pertanyaan...
              </option>
              <option value="1">Siapa nama Nenekmu?</option>
              <option value="2">Siapa nama mantan terbaik?</option>
              <option value="3">Gajelasssssss?!?!?!?!</option>
            </select>
          </div>
          {/* create form input text Jawaban Pribadi  */}
          <div className="mb-3 ms-2">
            <label htmlFor="jawaban_pribadi" className="form-label">
              Jawaban Pribadi<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="jawaban_pribadi"
              id="jawaban_pribadi"
              aria-describedby="jawaban_pribadihelp"
              placeholder="Rahasia"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button id="registerButton" className="btn btn-primary btn-lg mt-2">
              Daftar
            </button>
          </div>
        </form>
        <div className="text-end mt-4">
          <p className=" my-1 text-end">
            Sudah Punya Akun? <Link to="../login">Login</Link>
          </p>
          <Link to="../lupa-password">Lupa Password?</Link>
        </div>
      </div>
    </div>
  );
}
