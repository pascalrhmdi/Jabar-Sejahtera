import { Link } from "react-router-dom";
import { logoJabarSejahtera } from "../../assets";

export default function LoginPage() {
  return (
    <div className="container-lg d-flex justify-content-center align-items-center">
      <div className="col-10 col-md-8 col-lg-6 p-4 rounded-4 shadow-app mt-5 mb-3 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Masuk</h2>
          <img
            className="img-fluid img-footer"
            src={logoJabarSejahtera}
            alt="Logo Jabar Sejahtera"
          />
        </div>
        <form autoComplete="on" >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
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
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
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
          <div className="d-grid gap-2">
            <button
              id="loginButton"
              className="btn btn-primary btn-lg mt-2"
              type="submit"
            >
              Masuk
            </button>
          </div>
        </form>
        <div className="text-end mt-3">
          <p className=" my-1 text-end">
            Belum Punya Akun? <Link to="../register">Daftar</Link>
          </p>
          <Link to="../lupa-password">Lupa Password?</Link>
        </div>
      </div>
    </div>
  );
}
