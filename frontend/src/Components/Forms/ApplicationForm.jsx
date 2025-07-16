import React from "react";

const ApplicationForm = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <form
        action="#"
        className="flex flex-col gap-4 p-6 shadow-lg rounded-lg bg-gray-100 w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-center text-gray-800">Application Form</h2>
        <p className="text-center text-gray-500">Complete The form below to submit your application.</p>

        {/* Applicant Name */}
        <label htmlFor="name" className="text-sm font-semibold text-gray-700">
          Applicant Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
          required
          className="bg-white rounded-md p-2 border border-gray-300"
        />

        {/* Application Type */}
        <label htmlFor="applicationType" className="text-sm font-semibold text-gray-700">
          Select Application Type
        </label>
        <select
          name="applicationType"
          id="applicationType"
          required
          className="bg-white p-2 rounded-md border border-gray-300"
        >
          <option value="">-- Select Option --</option>
          <option value="vehicleRegistration">Vehicle Registration</option>
          <option value="licenseRenewal">License Renewal</option>
          <option value="permitApplication">Permit Application</option>
          <option value="drivingLicense">Driving License</option>
          <option value="drivingTest">Driving Test</option>
        </select>

        {/* Vehicle Type */}
        <label htmlFor="vehicleType" className="text-sm font-semibold text-gray-700">
          Vehicle Type
        </label>
        <select
          name="vehicleType"
          id="vehicleType"
          required
          className="bg-white p-2 rounded-md border border-gray-300"
        >
          <option value="">-- Select Option --</option>
          <option value="two_wheeler">Two-Wheeler (Bike/Scooter)</option>
          <option value="four_private">Four-Wheeler (Private Car)</option>
          <option value="four_commercial">Four-Wheeler (Commercial Vehicle)</option>
          <option value="heavy">Heavy Vehicle (Truck/Bus)</option>
          <option value="ev">Electric Vehicle (EV)</option>
        </select>

        {/* Vehicle Number */}
        <label htmlFor="vehicleNumber" className="text-sm font-semibold text-gray-700">
          Vehicle Number
        </label>
        <input
          type="text"
          name="vehicleNumber"
          id="vehicleNumber"
          placeholder="Enter your vehicle number"
          required
          className="bg-white rounded-md p-2 border border-gray-300"
        />

        {/* Date of Birth */}
        <label htmlFor="dob" className="text-sm font-semibold text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          id="dob"
          max={today}
          required
          className="bg-white rounded-md p-2 border border-gray-300"
        />

        {/* Address */}
        <label htmlFor="address" className="text-sm font-semibold text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address"
          required
          className="bg-white rounded-md p-2 border border-gray-300"
        />

        {/* City */}
        <label htmlFor="city" className="text-sm font-semibold text-gray-700">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter your city"
          required
          className="bg-white rounded-md p-2 border border-gray-300"
        />

        {/* State */}
        <label htmlFor="state" className="text-sm font-semibold text-gray-700">
          State
        </label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Enter your state"
          required
          className="bg-white rounded-md p-2 border border-gray-300"
        />

        {/* Postal Code */}
        <label htmlFor="postalCode" className="text-sm font-semibold text-gray-700">
          Postal Code
        </label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Enter your area's PIN code"
          pattern="\d{6}"
          maxLength={6}
          required
          className="bg-white rounded-md p-2 border border-gray-300"
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
