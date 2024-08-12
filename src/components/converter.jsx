import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalPop from './ModalPop';


const KmToMiConverter = () => {
  const [kilometers, setKilometers] = useState('');
  const [miles, setMiles] = useState('');
  const [extraInfo, setExtraInfo] = useState('');

  const handleKmChange = (e) => {
    const km = e.target.value;
    setKilometers(km);
    setMiles((km * 0.621371).toFixed(2));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3>Km to Mi Converter</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="kilometers">Kilometers</label>
              <input
                type="number"
                className="form-control"
                id="kilometers"
                value={kilometers}
                onChange={handleKmChange}
                placeholder="Enter kilometers"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="miles">Miles</label>
              <input
                type="text"
                className="form-control"
                id="miles"
                value={miles}
                readOnly
                placeholder="Converted miles"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="extraInfo">Extra Information</label>
              <input
                type="text"dsfdsf
                className="form-control"
                id="extraInfo"
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
                placeholder="Any extra info"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div><br />
      <ModalPop />
    </div>
  );
};

export default KmToMiConverter;
