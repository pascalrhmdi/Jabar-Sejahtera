import { useState } from "react";

export default function EditAkun() {

  const [dataUser, setDataUser] = useState({
    email: "muhammadpascalr66@gmail.com",
    name: "Muhammad Pascal Rahmadi",
    no_hp: "8986866875",
  })

  function onSubmitEditHandler(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataObj = Object.fromEntries(data.entries());
    console.log("data:", data);
    console.log("dataObj:", dataObj.email);
  }

  function onChangeUserHandler(e) {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitChangePasswordHandler(e) {
    e.preventDefault();
    const data = {
      old_password: e.target.old_password.value,
      new_password: e.target.new_password.value,
      new_password_confirmation: e.target.new_password_confirmation.value,
    };
  }

  return (
    <div className="container py-3">
      <button type="button" className="btn btn-secondary-app my-3">
        <i className="bi bi-chevron-left"></i>
        Kembali
      </button>
      <h1 className="mb-0">Edit Akun</h1>
      <p className="mb-4">Mengubah Profil dan Kata Sandi Akun</p>

      <div className="row mt-4 mb-5 mx-0 gap-col-1">
        <section id="editProfil" className="col px-0">
          <div className="card border-0 shadow-app p-3">
            <div className="card-body">
              <h4 className="card-title">Edit Profil</h4>
              <div className="card-text">
                <form onSubmit={onSubmitEditHandler} method="POST">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control disabled" name="email" id="email"  value={dataUser.email} onChange={onChangeUserHandler} disabled />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nama
                    </label>
                    <input type="text" className="form-control" name="name" value={dataUser.name} onChange={onChangeUserHandler} id="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="no_hp" className="form-label">
                      No. HP
                    </label>
                    <input type="tel" className="form-control" name="no_hp" id="no_hp" value={dataUser.no_hp} onChange={onChangeUserHandler} />
                  </div>
                  <div className="row justify-content-end">
                    <div className="d-grid col-md-6 col-lg-4">
                      <button className="btn btn-primary shadow-sm px-5 py-2 h6-plus">
                        Edit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="gantiKataSandi" className="col px-0">
          <div className="card border-0 shadow-app p-3">
            <div className="card-body">
              <h4 className="card-title">Ganti Password</h4>
              <div className="card-text">
                <form onSubmit={onSubmitChangePasswordHandler}>
                  <div className="mb-3">
                    <label htmlFor="old_password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" name="old_password" id="old_password" placeholder="**********" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="new_password" className="form-label">
                      Password Baru
                    </label>
                    <input type="password" className="form-control" name="new_password" id="new_password" placeholder="**********" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirm_new_password" className="form-label">
                      Konfirmasi Password Baru
                    </label>
                    <input type="password" className="form-control" name="confirm_new_password" id="confirm_new_password" placeholder="***********" />
                  </div>

                  <div className="row justify-content-end">
                    <div className="d-grid col-md-6 col-lg-4">
                      <button type="submit" className="btn btn-primary shadow-sm px-5 py-2 h6-plus">
                        Ganti
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
