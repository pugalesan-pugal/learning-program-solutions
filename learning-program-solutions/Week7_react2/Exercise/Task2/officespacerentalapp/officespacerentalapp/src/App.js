import React from "react";
import "./App.css"; // Import CSS file

// Office list array
const offices = [
  {
    id: 1,
    name: "Skyview Tower",
    rent: 45000,
    address: "12th Avenue, Downtown",
    image: process.env.PUBLIC_URL + "/download1.jpeg", // local image
  },
  {
    id: 2,
    name: "Sunrise Plaza",
    rent: 75000,
    address: "45 Hill Street, Uptown",
    image: "https://via.placeholder.com/300x200?text=Sunrise+Plaza",
  },
  {
    id: 3,
    name: "Green Valley Hub",
    rent: 60000,
    address: "West End Road",
    image: "https://via.placeholder.com/300x200?text=Green+Valley+Hub",
  },
];

// Inline CSS for heading
const headingStyle = {
  color: "#2c3e50",
  textAlign: "center",
  margin: "20px 0",
};

function App() {
  return (
    <div>
      <h1 style={headingStyle}>🏢 Office Space Rental App</h1>

      {offices.map((office) => (
        <div
          key={office.id}
          style={{
            border: "1px solid #ccc",
            margin: "20px",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            className="office-image"
          />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent > 60000 ? "green" : "red" }}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
