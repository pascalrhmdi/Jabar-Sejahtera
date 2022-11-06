import React, { useEffect } from "react";

export default function LaporanPage() {

  useEffect(() => {
    document.title = "Laporan";
  }, []);
  return (
    <>
      <section className="pt-4" id="introLaporanPengeluaran">
        <div className="container-lg my-4 p-4 bg-white rounded-3 shadow-app">
          <h2 className="mb-0">Laporan Pengelolaan Dana</h2>
          <hr />
          <p>
            <b>(Jabar Sejahtera - Bandung)</b> - Salah satu asas dalam
            pengelolaan zakat adalah akuntabilitas. Jabar Sejahtera berkomitmen
            untuk memenuhi asas tersebut dalam pengelolaannya. Salah satu
            implementasinya,Jabar Sejahtera senantiasa diaudit oleh akuntan
            publik.
          </p>
          <p>
            Alhamdulillahi rabbil 'alamin, Jabar Sejahtera kembali meraih
            predikat opini audit keuangan Wajar Tanpa Pengecualian (WTP) untuk
            laporan keuangan tahun 2021. Predikat opini audit keuangan WTP ini
            merupakan kali kelima yang diraih Jabar Sejahtera untuk laporan
            keuangan selama 5 tahun berturut-turut sejak tahun 2017. Untuk
            menjaga keamanahan, laporan keuangan diaudit oleh akuntan publik
            berbeda.
          </p>
          <p>
            Selain teraudit oleh akuntan publik, Jabar Sejahtera juga
            terakreditasi A dan memperoleh predikat opini audit syariah "Sesuai
            Syariah" dari Kementerian Agama Republik Indonesia.
          </p>
          <details>
            <summary>
              <strong>Intisari Laporan Dana Zakat</strong>
            </summary>
            <p>
              Tahun ini telah terkumpul dana zakat sejumlah (per 1 Januari):{" "}
              <strong>Rp5.120.321.123</strong>
              <br />
              Bulan ini telah terkumpul dana zakat sejumlah:{" "}
              <strong>Rp.1.123.092.999</strong>
              <br />
              Telah diserahkan dari dana zakat kepada yang berhak sejumlah:{" "}
              <strong>Rp.1.123.092.999</strong>
            </p>
          </details>
          <details className=" mt-2 mb-3">
            <summary>
              <strong>Intisari Laporan Dana Donasi</strong>
            </summary>
            <p>
              Tahun ini telah terkumpul dana donasi sejumlah (per 1 Januari):{" "}
              <strong>Rp4.543.321.222</strong>
              <br />
              Bulan ini telah terkumpul dana donasi sejumlah:{" "}
              <strong>Rp. 2.211.092.122</strong>
              <br />
              Telah diserahkan dari dana donasi kepada yang berhak sejumlah:{" "}
              <strong>Rp. 2.752.321.677</strong>
            </p>
          </details>
          <p>Untuk laporan keuangan bisa diunduh pada Tombol di bawah ini:</p>
          <button type="button" className="btn btn-primary-app px-5 py-2 h6-plus">
            <i className="bi bi-download pe-1"></i>
            Laporan 2022
          </button>
        </div>
      </section>
      <section
        className="container-lg my-3 mb-5 p-4 bg-white rounded-3 shadow-app"
        id="tabelLaporan"
      >
        <h3 className="mb-0">Tabel Laporan</h3>
        <hr />
        <p className="mb-4">
          Tabel laporan ini tersedia untuk laporan selama satu tahun.
        </p>

        <div className="table-responsive">
          <table
            id="tables"
            className="table table-striped table-hover table-bordered"
            style={{ width: "100%" }}
          >
            <thead>
              <th>Tanggal</th>
              <th>Kebutuhan</th>
              <th>Jenis Penyaluran</th>
              <th>Dana terpakai</th>
            </thead>
            <tbody>
              <tr>
                <td>16 November 2022</td>
                <td>Membantu Banjir Bogor</td>
                <td>Bencana Alam</td>
                <td>Rp.15.000.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
