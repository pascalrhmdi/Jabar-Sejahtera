import React from "react";
import { giveDonation } from "../../assets";
import { EventCard } from "../../components";
import { textTruncate } from "../../utils";

export default function EventPage() {
  const data = [
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
    <div className="container">
      <h1 className="text-center p-4">Daftar Event</h1>
      <section className="mb-5 mx-0" id="listEvent">
        <div className="row justify-content-end g-2 mb-3">
          <div className="col-auto">
            <button type="button" className="btn btn-primary">
              <i className="bi bi-funnel-fill me-1"></i>
              Filter
            </button>
          </div>
          <div className="col-auto">
            <div className="dropdown open">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="sortId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-sort-down me-1"></i>
                Sort By
              </button>
              <div className="dropdown-menu" aria-labelledby="sortId">
                <button className="dropdown-item">A-Z</button>
                <button className="dropdown-item">Z-A</button>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-danger">
              Reset
            </button>
          </div>
        </div>
        <div className="row g-2 py-1">
          {data.map((item) => (
            <EventCard
              containerClassName="col-6 col-md-4 col-lg-3"
              key={item.id}
              title={item.title}
              description={textTruncate(item.description)}
              img={item.image}
              alt={item.title}
              tempat={item.tempat}
              hari={item.hari}
              tanggal={item.tanggal}
            />
          ))}
        </div>
        <nav aria-label="Page navigation example" className="mt-3">
          <ul className="pagination justify-content-center">
            <li className="page-item ">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
