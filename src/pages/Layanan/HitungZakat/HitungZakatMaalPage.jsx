export default function HitungZakatMaalPage() {
  return (
    <>
      <h1 className="text-center pt-4">Hitung Zakat</h1>
      <div className="container">
        <section
          className="row justify-content-center mt-3 mb-5 mx-0"
          id="hitungZakat"
        >
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card border-0 shadow-app">
              <div className="card-body p-1">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active w-50"
                      id="nav-zakatpenghasilan-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-zakatpenghasilan"
                      type="button"
                      role="tab"
                      aria-controls="nav-zakatpenghasilan"
                      aria-selected="false"
                    >
                      <h6 className="my-1 text-center">Zakat penghasilan</h6>
                    </button>
                    <button
                      className="nav-link w-50"
                      id="nav-zakatmaal-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-zakatmaal"
                      type="button"
                      role="tab"
                      aria-controls="nav-zakatmaal"
                      aria-selected="true"
                    >
                      <h6 className="my-1 text-center">Zakat Maal</h6>
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-zakatpenghasilan"
                    role="tabpanel"
                    aria-labelledby="nav-zakatpenghasilan-tab"
                    tabIndex="0"
                  >
                    {/* ZAKAT PENGHASILAN */}
                    <form method="GET" action="" autoComplete="on">
                      <div className="p-3">
                        <section id="Penghasilan">
                          <p>
                            <dfn>
                              <strong>Zakat penghasilan</strong>
                            </dfn>{" "}
                            atau <dfn>zakat profesi</dfn> adalah zakat yang
                            dikenakan pada setiap pekerjaan atau keahlian
                            professional tertentu, baik yang dilakukan sendirian
                            maupun bersama orang/ lembaga lain, yang
                            mendatangkan penghasilan (uang) halal yang memenuhi
                            nisab (batas minimum untuk wajib zakat).
                          </p>
                          <div className="row g-2 mb-3">
                            <div className="col">
                              <label htmlFor="Penghasilan" className="form-label">
                                Penghasilan/Gaji Per Bulan
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="Penghasilan"
                                id="Penghasilan"
                                aria-describedby="penghasilanlainhelp"
                                placeholder="Rp."
                              />
                            </div>
                            <div className="col">
                              <label htmlFor="Penghasilanlain" className="form-label">
                                Penghasilan lain/Gaji Per Bulan
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="Penghasilanlain"
                                id="Penghasilanlain"
                                aria-describedby="penghasilanlainhelp"
                                placeholder="Rp."
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="hutang" className="form-label">
                              Hutang/Cicilan Untuk Kebutuhan Pokok
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="hutang"
                              id="hutang"
                              aria-describedby="hutangId"
                              placeholder="Rp."
                            />
                          </div>
                          <div className="mb-5">
                            <label htmlFor="jumlahpenghasilan" className="form-label">
                              Jumlah Penghasilan Per Bulan
                            </label>
                            <input
                              disabled
                              type="number"
                              className="form-control"
                              name="jumlahpenghasilan"
                              id="jumlahpenghasilan"
                              aria-describedby="jumlahpenghasilanId"
                              placeholder="Rp."
                            />
                          </div>
                        </section>
                        <section id="Nisab">
                          <h3>Nisab Zakat Penghasilan</h3>
                          <p>
                            <dfn>
                              <strong>Nisab</strong>
                            </dfn>{" "}
                            adalah syarat jumlah minimum (ambang batas) harta
                            yang dapat dikategorikan sebagai harta wajib zakat.
                            Untuk penghasilan yang diwajibkan zakat adalah
                            penghasilan yang berada diatas nisab. Nisab Zakat
                            Penghasilan adalah setara 85 gr emas.
                          </p>
                          <div className="mb-3">
                            <label htmlFor="hargaemas" className="form-label">
                              Harga Emas Saat Ini (/gr)
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="hargaemas"
                              id="hargaemas"
                              aria-describedby="hargaemasId"
                              placeholder="Rp."
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="besarnasab" className="form-label">
                              Besarnya Nisab Zakat Penghasilan Per Bulan (Harga
                              Emas 85gr)
                            </label>
                            <input
                              disabled
                              type="number"
                              className="form-control"
                              name="besarnasab"
                              id="besarnasab"
                              aria-describedby="besarnasabId"
                              placeholder="Rp."
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="jumlahbayar" className="form-label">
                              Jumlah yang harus dibayarkan per bulan
                            </label>
                            <input
                              disabled
                              type="number"
                              className="form-control"
                              name="jumlahbayar"
                              id="jumlahbayar"
                              aria-describedby="jumlahbayarId"
                              placeholder="Rp."
                            />
                          </div>
                        </section>
                        <div className="d-grid mt-4">
                          <a
                            name="nextButton"
                            id="nextButton"
                            className="btn btn-primary-app py-2"
                            href="donasi.html"
                            role="button"
                          >
                            Bayar Sekarang{" "}
                            <i className="bi bi-caret-right-fill"></i>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* ZAKAT MAAL */}
                  <div
                    className="tab-pane fade "
                    id="nav-zakatmaal"
                    role="tabpanel"
                    aria-labelledby="nav-zakatmaal-tab"
                    tabIndex="0"
                  >
                    <form method="GET" action="" autoComplete="on">
                      <div className="p-3">
                        <section id="Penghasilan">
                          <p>
                            <dfn>
                              <strong>Zakat harta</strong>
                            </dfn>{" "}
                            atau <dfn>zakat maal</dfn> adalah sejumlah harta
                            yang wajib dikeluarkan bila telah mencapai batas
                            minimal tertentu (nisab) dalam kurun waktu (haul)
                            setiap satu tahun kalender.
                          </p>
                          <div className="row g-2 mb-3">
                            <div className="col">
                              <label htmlFor="harta" className="form-label">
                                Uang Tunai, Tabungan, dan deposito
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="harta"
                                id="harta"
                                aria-describedby="penghasilanlainhelp"
                                placeholder="Rp."
                              />
                            </div>
                            <div className="col">
                              <label htmlFor="aset" className="form-label">
                                Kendaraan, Rumah, Aset, Emas, dll.
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name="aset"
                                id="aset"
                                aria-describedby="asethelp"
                                placeholder="Rp."
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="hutang" className="form-label">
                              Hutang/Cicilan Untuk Kebutuhan Pokok
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="hutang"
                              id="hutang"
                              aria-describedby="hutangId"
                              placeholder="Rp."
                            />
                          </div>
                          <div className="mb-5">
                            <label htmlFor="jumlahpenghasilan" className="form-label">
                              Jumlah Penghasilan Per Tahun
                            </label>
                            <input
                              disabled
                              type="number"
                              className="form-control"
                              name="jumlahpenghasilan"
                              id="jumlahpenghasilan"
                              aria-describedby="jumlahpenghasilanId"
                              placeholder="Rp."
                            />
                          </div>
                        </section>
                        <section id="Nisab">
                          <h2>Nisab Zakat Maal</h2>
                          <p>
                            Nisab adalah syarat jumlah minimum (ambang batas)
                            harta yang dapat dikategorikan sebagai harta wajib
                            zakat. Untuk penghasilan yang diwajibkan zakat
                            adalah penghasilan yang berada diatas nisab. Nisab
                            Zakat Penghasilan adalah setara 85 gr emas.{" "}
                            <strong>Nisab Setahun</strong>
                          </p>
                          <div className="mb-3">
                            <label htmlFor="hargaemas" className="form-label">
                              Harga Emas Saat Ini (/gr)
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="hargaemas"
                              id="hargaemas"
                              aria-describedby="hargaemasId"
                              placeholder="Rp."
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="besarnasab" className="form-label">
                              Besarnya Nisab Zakat Penghasilan Per Tahun (Harga
                              Emas 85gr)
                            </label>
                            <input
                              disabled
                              type="number"
                              className="form-control"
                              name="besarnasab"
                              id="besarnasab"
                              aria-describedby="besarnasabId"
                              placeholder="Rp."
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="jumlahbayar" className="form-label">
                              Jumlah yang harus dibayarkan per Tahun
                            </label>
                            <input
                              disabled
                              type="number"
                              className="form-control"
                              name="jumlahbayar"
                              id="jumlahbayar"
                              aria-describedby="jumlahbayarId"
                              placeholder="Rp."
                            />
                          </div>
                        </section>
                        <div className="d-grid mt-4">
                          <a
                            name="nextButton"
                            id="nextButton"
                            className="btn btn-primary-app py-2 b"
                            href="donasi.html"
                            role="button"
                          >
                            Bayar Sekarang{" "}
                            <i className="bi bi-caret-right-fill"></i>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
