import React, { useState } from "react";

interface UserFormModalProps {
  onSubmit: (name: string, email: string, designation: string) => void;
  onClose: () => void;
}

const UserDetailsModal: React.FC<UserFormModalProps> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !designation) {
      setError("All fields are required.");
      return;
    }

    setError("");
    onSubmit(name, email, designation);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-40">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Provide Your Details</h2>

        {error && <p className="text-red-600 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-2 px-3 py-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 px-3 py-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded text-gray-700"
        >
          <option value="">Select Designation</option>
          <option value="Student">Student</option>
          <option value="Professor">Professor</option>
                  <option value="Employee">Employee</option>
                  <option value="Other">Other</option>
        </select>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
