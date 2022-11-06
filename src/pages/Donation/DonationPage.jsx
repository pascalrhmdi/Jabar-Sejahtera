import { donasi } from "../../assets/images";

export default function DonationPage() {
  return (
    <>
    <h1 className="text-center py-3">Donasi</h1>
    <section className="row justify-content-center" id="pilihJenisDonasi">
      <div className="col-7">
        <div className="card border-0 shadow-app">
          <img src={donasi} className="card-img-top" alt="..."/>
          <div className="card-body p-0">
            <div className="bg-orange text-white  py-25">
              <h6 className="mb-0 text-center">Pilih Jenis Donasi</h6>
            </div>
            <form method="GET" action="" autocomplete="on">
              <div className="p-3">
                {/* Jenis Donasi */}
                <select className="form-select mb-3" name="jenisdonasi" id="jenisdonasi">
                  <option selected disabled>Pilih Jenis Donasi...</option>
                  <option value="1">Zakat</option>
                  <option value="2">Donasi</option>
                </select>
                {/* Sub Jenis Donasi  */}
                <select className="form-select mb-3" name="subjenisdonasi" id="subjenisdonasi">
                  <option selected disabled>Pilih Jenis Zakat..</option>
                  <option value="1">Zakat Maal</option>
                  <option value="2">Zakat Penghasilan</option>
                </select>
                {/* NominalRupiah */}
                <div className="mb-3">
                  <label htmlFor="nominal" className="form-label"><strong>Masukkan Nominal:</strong></label>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="nominal">Rp</span>
                    <input type="text" className="form-control" name="nominal" id="nominal" placeholder="Rp." aria-label="nominal" aria-describedby="nominal"/>
                  </div>
                </div>
                {/* Nama  */}
                <div>
                  <label htmlFor="Nama" className="form-label"><strong>Lengkapi Data Diri Dibawah Ini:</strong></label>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="name">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Masukkan nama anda..." aria-label="name" aria-describedby="name"/>
                  </div>
                </div>
                 {/* Checkbox  */}
                <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" value="samarkan" id="samarkannama"/>
                  <label className="form-check-label" htmlFor="samarkannama">
                    Samarkan Nama (Hamba Allah)
                  </label>
                </div>
                {/* Phone Number  */}
                <div className="mb-1">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="nominal">
                      <i className="bi bi-phone"></i>
                    </span>
                    <input type="tel" className="form-control" name="no_hp" id="no_hp" placeholder="8986866875" aria-label="no_hp" aria-describedby="no_hp"/>
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <a name="nextButton" id="nextButton" className="btn btn-primary py-2" href="donasi2.html" role="button">Selanjutnya <i className="bi bi-caret-right-fill"></i></a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
