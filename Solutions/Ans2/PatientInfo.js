import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStethoscope, faArrowsAltH, faBone } from '@fortawesome/free-solid-svg-icons';
import Progress from './Progress'; // Import Progress component

function PatientInfo() {
  return (
    <div className="patient-info">
      <div className="header">
        <div className="profile-container">
          <div className="patient-details">
            <h3>S.Meena, F/23</h3>
            <p>Patient ID: 87 20200727153457</p>
            <div className="goal-box">
              <Progress />
            </div>
          </div>
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYuTvsKxWBe_DNKIV_YY8qxzmr7rh9RFgCc-OjdIPaYk7xVhXw" 
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faPhone} className="icon" /> <strong>Phone no.:</strong> 8022334455</p>
        <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> <strong>Mail ID:</strong> <a href="mailto:meenaarabinsachin2@gmail.com">meenaarabinsachin2@gmail.com</a></p>
        <p><FontAwesomeIcon icon={faArrowsAltH} className="icon" /> <strong>Affected side:</strong> Bilateral</p>
        <p><FontAwesomeIcon icon={faStethoscope} className="icon" /> <strong>Condition:</strong> Ortho</p>
        <p><FontAwesomeIcon icon={faBone} className="icon" /> <strong>Speciality:</strong> Osteoarthritis</p>
        <p><strong>Medical history:</strong> Hypertension, DM, Hypothyroidism</p>
      </div>
    </div>
  );
}

export default PatientInfo;
