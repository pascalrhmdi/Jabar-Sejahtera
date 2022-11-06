
export default function RiwayatDonasi() {
  return (
    <div className="container py-3">
      <button type="button" className="btn btn-secondary-app my-3 shadow-sm fw-semibold">
        <i className="bi bi-chevron-left"></i>
        Kembali
      </button>

      <div className="row mt-3 mb-5 mx-0 gap-col-1">
        <section id="editProfil" className="px-0">
          <div className="card border-0 shadow-app p-3">
            <div className="card-body">
              <h4 className="card-title">Riwayat Donasi</h4>
              <p className="card-text">
                <p>Halaman riwayat donasi menampilkan tabel riwayat donasi yang pernah anda berikan.</p>
              </p>
              <div className="table-responsive mt-5">
                <table id="tables" className="table table-striped table-hover table-bordered" style={{width:"100%"}}>
                  <thead>
                    <th>No.</th>
                    <th>Tgl</th>
                    <th>Invoice ID</th>
                    <th>Jenis Donasi</th>
                    <th>Nominal</th>
                    <th>Status</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>16/05/2001</td>
                      <td>Inv/0001/Bncnalm/0001</td>
                      <td>Bencana Alam</td>
                      <td>Rp.15.000.000</td>
                      <td><span className="badge bg-success rounded-pill">Berhasil</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>16/05/2001</td>
                      <td>Inv/0001/Bncnalm/0002</td>
                      <td>Bencana Alam</td>
                      <td>Rp.25.000.000</td>
                      <td><span className="badge bg-danger rounded-pill">Gagal</span></td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
