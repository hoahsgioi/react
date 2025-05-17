import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MedicationRequest() {
  // Demo data for students
  const students = [
    { id: 1, name: 'Emma Johnson', grade: '5th Grade', age: 10 },
    { id: 2, name: 'Thomas Johnson', grade: '8th Grade', age: 13 },
    { id: 3, name: 'Olivia Smith', grade: '3rd Grade', age: 8 },
  ];

  // Form state
  const [formData, setFormData] = useState({
    studentId: '',
    medicationName: '',
    dosage: '',
    frequency: '',
    startDate: '',
    endDate: '',
    instructions: '',
    prescriptionImage: null,
    isSelfAdministered: false,
    needsRefrigeration: false,
    consentToAdminister: false,
    additionalNotes: '',
  });

  // Form handling
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form
    if (!formData.studentId || !formData.medicationName || !formData.dosage || !formData.frequency || 
        !formData.startDate || !formData.endDate || !formData.consentToAdminister) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // In a real app, this would submit to an API
    alert('Medication request submitted successfully!');
    
    // Reset form or redirect
    // setFormData({ ... }); // Reset form
    // or navigate to medications list
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Request Medication Administration</h1>
        <p className="text-gray-600">Complete this form to request medication administration at school</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          {/* Student Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">
              Student <span className="text-red-500">*</span>
            </label>
            <select
              id="studentId"
              name="studentId"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.studentId}
              onChange={handleChange}
              required
            >
              <option value="">Select a student</option>
              {students.map(student => (
                <option key={student.id} value={student.id}>
                  {student.name} ({student.grade})
                </option>
              ))}
            </select>
          </div>
          
          {/* Medication Information */}
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Medication Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicationName">
                Medication Name <span className="text-red-500">*</span>
              </label>
              <input
                id="medicationName"
                name="medicationName"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., Ibuprofen, Albuterol"
                value={formData.medicationName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dosage">
                Dosage <span className="text-red-500">*</span>
              </label>
              <input
                id="dosage"
                name="dosage"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., 200mg, 2 puffs"
                value={formData.dosage}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="frequency">
              Frequency <span className="text-red-500">*</span>
            </label>
            <input
              id="frequency"
              name="frequency"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g., Once daily, Every 4-6 hours as needed"
              value={formData.frequency}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
              Special Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="3"
              placeholder="e.g., Take with food, Follow with water"
              value={formData.instructions}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prescriptionImage">
              Upload Prescription (if applicable)
            </label>
            <input
              id="prescriptionImage"
              name="prescriptionImage"
              type="file"
              accept="image/*,.pdf"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
            <p className="text-sm text-gray-500 mt-1">
              Upload a clear image of the prescription or doctor's note (PDF or image)
            </p>
          </div>
          
          {/* Additional Information */}
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Additional Information</h2>
          
          <div className="mb-6">
            <div className="flex items-center">
              <input
                id="isSelfAdministered"
                name="isSelfAdministered"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.isSelfAdministered}
                onChange={handleChange}
              />
              <label className="ml-2 block text-gray-700" htmlFor="isSelfAdministered">
                Student is capable of self-administering this medication
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center">
              <input
                id="needsRefrigeration"
                name="needsRefrigeration"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.needsRefrigeration}
                onChange={handleChange}
              />
              <label className="ml-2 block text-gray-700" htmlFor="needsRefrigeration">
                This medication requires refrigeration
              </label>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalNotes">
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="3"
              placeholder="Any additional information the school nurse should know"
              value={formData.additionalNotes}
              onChange={handleChange}
            ></textarea>
          </div>
          
          {/* Consent */}
          <div className="mb-6 bg-gray-50 p-4 border rounded">
            <div className="flex items-center">
              <input
                id="consentToAdminister"
                name="consentToAdminister"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.consentToAdminister}
                onChange={handleChange}
                required
              />
              <label className="ml-2 block text-gray-700" htmlFor="consentToAdminister">
                <span className="font-medium">I consent</span> for the school nurse or designated personnel to administer the medication as directed above. I understand that the school administrator may designate other personnel to administer the medication as needed.
              </label>
            </div>
          </div>
          
          {/* Submit Buttons */}
          <div className="flex items-center justify-between mt-8">
            <Link 
              to="/parent/medications"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded transition duration-150 ease-in-out"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-150 ease-in-out"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
      
      {/* Help Info */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              All medication must be provided in the original labeled container. Over-the-counter medication must be in an unopened container. All medication requests will be reviewed by the school nurse before approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicationRequest;
