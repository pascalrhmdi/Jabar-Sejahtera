import { Link } from "react-router-dom";
import { donasi1, giveDonation, illustration, locationJS, vectorHijau } from "../assets";
import { EventCard } from "../components";
import { textTruncate } from "../utils";

export default function HomePage() {

  const events = [
    {
      id: 1,
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Rabu",
      tanggal: "12-12-2020",
    },
    {
      id: 2,
      title: "Event 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Jumat",
      tanggal: "12-12-2020",
    },
    {
      id: 3,
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Sabtu",
      tanggal: "12-12-2020",
    },
    {
      id: 4,
      title: "Event 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Rabu",
      tanggal: "12-12-2020",
    },
    {
      id: 5,
      title: "Event 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Jumat",
      tanggal: "12-12-2020",
    },
    {
      id: 6,
      title: "Event 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Sabtu",
      tanggal: "12-12-2020",
    },
    {
      id: 7,
      title: "Event 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Rabu",
      tanggal: "12-12-2020",
    },
    {
      id: 8,
      title: "Event 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Jumat",
      tanggal: "12-12-2020",
    },
    {
      id: 9,
      title: "Event 9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eget aliquam nisl nunc eu nunc.",
      image: giveDonation,
      tempat: "Jakarta",
      hari: "Sabtu",
      tanggal: "12-12-2020",
    },
  ];

  return (
    <>
      <section className="position-relative">
        <img id="imageMainSection" src={vectorHijau} alt="Vector Hijau" />
        <div className="container-lg d-flex justify-content-center position-relative">
          <img id="mainIllustration" className="me-5 mb-md-4 mb-lg-2 d-none d-md-block" src={illustration} alt="Main Illustration" />
          <div className="col-10 col-md-7 col-lg-6 text-white me-md-5 pe-md-5 me-lg-0 pe-lg-0 mt-5 pt-sm-4 text-center" id="mainText">
            <h1 className="display-6 fw-semibold text-center mb-3 ">
              Raih Kebahagiaan Dunia dan <span className="text-orange">Akhirat</span>
            </h1>
            <p className="text-center mb-3">
              Platform donasi untuk membantu warga Jawa Barat yang membutuhkan, Tunaikan kewajiban zakatmu bersama Jabar Sejahtera. Terakreditasi “A”
              pada audit Syariah Kementrian Agama Tahun 2022 serta meraih opini audit keuangan wajar tanpa pengecualian (WTP)
            </p>
            <Link name="donasi" id="donasi" className="btn btn-lg btn-primary btn-orange-on-hover shadow-sm px-5" to="../donasi" role="button">
              Tunaikan Sekarang
            </Link>
          </div>
        </div>
      </section>
      <div className="container-lg">
        <section className="row mb-45" id="hitungzakat">
          <h2 className="text-center my-4">Penyalur Zakat Terpercaya</h2>
          <div className="col-12 col-lg-5 mb-4 mb-md-0 text-center text-lg-start">
            <img className="img-fluid" style={{height: "100%"}} src={donasi1} alt="Donasi JS" />
          </div>
          <div className="col d-flex flex-column justify-content-between">
            <div>
              <h6 className="h6-plus">Transparan, Terpercaya, dan Teruji</h6>
              <p>
                Prinsip kami Jabar Sejahtera adalah Amanah, Syariah, Customer Oriented, Growth, Ibadah. Jabar Sejahtera meraih opini audit keuangan
                Wajar Tanpa Pengecualian (WTP). Empat tahun berturut-turut (2017-2020) terakredita si “A” pada Audit Syariah Kementrian Agama 2019.
              </p>
              <h6 className="h6-plus">Hitung dan Tunaikan Wajib Zakatmu di Website Jabar Sejahtera</h6>
              <p>
                Kini tersedia fitur untuk menghitung wajib zakatmu di website Jabar Sejahtera. Insyaallah cepat dan tepat. Setelah kamu menghitung
                wajib zakatmu kini kamu juga bisa membayar wajib zakatmu di dalam website yang sama. Tunggu apalagi hitung dan bayar sekarang juga!
              </p>
            </div>
            <div className="d-grid">
              <Link name="hitungzakat" id="hitungzakat" className="btn btn-lg shadow-sm btn-primary btn-green-on-hover" to="../layanan/hitung-zakat" role="button">
                Hitung Zakat Sekarang
              </Link>
            </div>
          </div>
        </section>
        <section className="p-4 bg-white rounded-3 shadow-app mb-4" id="daftarevent">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Event Terbaru</h3>
            <Link to="../event" className="btn btn-link text-reset text-decoration-none scroll">
              Selengkapnya &gt;&gt;&gt;
            </Link>
          </div>
          <div className="row d-flex flex-nowrap g-2 overflow-auto pb-2 gap-col-05">
            {
              events.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  description={textTruncate(event.description)}
                  img={event.image}
                  tempat={event.tempat}
                  hari={event.hari}
                  tanggal={event.tanggal}
                  alt="Gambar Event"
                  containerClassName="col-6 col-md-4 col-lg-3"
                />
              ))
            }
          </div>
        </section>
        <section className="p-4 bg-white rounded-3 shadow-app" id="kunjungikami">
          <h3 className="mb-3">Kunjungi Kami</h3>
          <div className="row g-5">
            <div className="col-12 col-md d-flex flex-column justify-content-between">
              <p>
                Kami siap melayani anda dengan sebaik-baiknya, kepuasan anda adalah nomor satu. Kami hadir di Kota Bandung dekat Pemerintahan Kota
                Bandung. Berikut adalah lokasi
              </p>
              <div className="d-flex align-items-center gap-col-1">
                <i className="bi bi-pin-map-fill fs-4"></i>
                <address className="m-0">Jl. Gelap Nyawang No.4, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</address>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={locationJS} className="img-fluid" alt="Lokasi Jabar Sejahtera" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
