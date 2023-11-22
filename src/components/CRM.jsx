import React from 'react';
import './CRM.css';  // Import your CSS file for styling

const CRM = () => {
  return (
    <div className="crm-container">
      <h1>Welcome to Customer Relationship Management (CRM)</h1>
      <p>
        Customer Relationship Management (CRM) is a strategy for managing a company's interactions with current and future customers.
        The goal is to improve business relationships, assist in customer retention, and drive sales growth.
      </p>

      <div className="image-container">
        <img src="https://global.hitachi-solutions.com/wp-content/uploads/2022/01/managed-services-4.jpg" alt="CRM Image 1" />
        <img src="https://cdn.scopicsoftware.com/wp-content/uploads/2022/10/customer-relationship-management.png" alt="CRM Image 2" />
        <img src="https://www.liveabout.com/thmb/SeiJEKCrlwTXcNEla5h6KbPhVjs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1162793188-556cae90ff084242b85392742e55b603.jpg" alt="CRM Image 3" />
      </div>

      <p>
        CRM systems help companies stay connected to customers, streamline processes, and improve profitability.
        They collect data from various communication channels and consolidate it into a single database for easy access.
      </p>

      <p>
        Whether you are managing contacts, leads, opportunities, or tasks, a robust CRM system is essential for effective customer management.
      </p>
    </div>
  );
};

export default CRM;
