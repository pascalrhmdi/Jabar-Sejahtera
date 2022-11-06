import React from 'react'
import { Link } from 'react-router-dom'
import { giveDonation } from '../assets'

export default function EventCard({
  img = giveDonation,
  alt = 'alt',
  title = 'Judul Default',
  description = 'Deskripsi Default',
  tempat = 'Tempat Default',
  hari = 'Hari Default',
  tanggal = 'Tanggal Default',
  containerClassName = '',
}) {
  return (
    <div className={containerClassName}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={img}
                  alt={alt}
                />
                <div className="card-body">
                  <h5 className="card-title h6-plus ">{title}</h5>
                  <p className="card-text mb-4">
                    {description}
                  </p>
                  <div className="d-flex align-items-center  gap-col-1">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>{tempat}</span>
                  </div>
                  <div className="d-flex align-items gap-col-1">
                    <i className="bi bi-calendar-date-fill"></i>
                    <span>{hari}, {tanggal}</span>
                  </div>
                  <Link to={'event-detail'} className="stretched-link"></Link>
                </div>
              </div>
            </div>
  )
}
