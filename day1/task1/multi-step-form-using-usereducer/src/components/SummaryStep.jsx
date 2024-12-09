import React from 'react'

export const SummaryStep = ({onBack,summary, setSummary}) => {
  return (
  <>
    <div className="container mt-4 w-50">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title mb-0">Summary</h5>
        </div>
        <div className="card-body">
          <p><strong>Name:</strong> {summary.name}</p>
          <p><strong>Email:</strong> {summary.email}</p>
          <p><strong>Phone:</strong> {summary.phone}</p>
          <p><strong>Address:</strong> {summary.street}, {summary.city}, {summary.zip}</p>
        </div>
        <div className="card-footer text-end">
          <button className="btn btn-secondary me-2" onClick={onBack}>Back</button>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </>
  )
}
