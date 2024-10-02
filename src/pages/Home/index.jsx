import React, { useState } from "react";
import "./home.css";

const TodoList = () => {
  const [ip, setIp] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [devices, setDevices] = useState([]);

  const addDevice = () => {
    if (ip && deviceName) {
      const newDevice = { ip, name: deviceName };
      setDevices([...devices, newDevice]);
      setIp("");
      setDeviceName("");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title">Device To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          className="input-field"
          placeholder="Enter IP address"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter Device Name"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />
        <button className="add-button" onClick={addDevice}>
          Add Device
        </button>
      </div>

      <h2 className="device-list-title">Device List</h2>
      <ul className="device-list">
        {devices.map((device, index) => (
          <li key={index} className="device-item">
            {device.name} - {device.ip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
