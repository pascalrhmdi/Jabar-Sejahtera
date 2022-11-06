import React from "react";
import { komunitasJS } from "../assets";

export default function TentangKamiPage() {
  return (
      <section
        className="row justify-content-center pt-4 mb-5 mx-0"
        id="pilihJenisDonasi"
      >
        <div className="col-10">
          <div className="card border-0 shadow-app bg-white">
            <img
              src={komunitasJS}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body p-3">
              <p>
                <dfn>
                  <strong>Jabar Sejahtera</strong>
                </dfn>{" "}
                adalah Lembaga Amil Zakat (LAZ) yang telah berdiri sejak Tahun
                2007 untuk menghimpun dan menyalurkan dana ZIS (Zakat, Infak,
                Sedekah) melalui berbagai program.
              </p>
              <p>
                Prinsip dari Jabar Sejahtera adalah Amanah, Syariah, Customer
                Oriented, Growth, Ibadah.
              </p>
              <p>
                Jabar Sejahtera meraih opini audit keuangan Wajar Tanpa
                Pengecualian (WTP). <br />
                Empat tahun berturut-turut (2017-2020) terakreditasi “A” pada
                Audit Syariah Kementrian Agama 2019.
              </p>
              <strong className="fw-normal">
                Akta Pendirian <br />
                No.03 Tanggal 11 Maret 2012 <br />
                Notaris Sidiq, S.H., M.Kn. <br />
                Keputusan Menteri Hukum dan Hak Asasi Manusia <br />
                No. AHU-00067655.AH.01.04.Tahun2012 <br />
                NPWP : 81.737.711.5-521.000
              </strong>
            </div>
          </div>
        </div>
      </section>
  );
}
