import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MedicationForm() {
    const navigate = useNavigate();
    const [medicationData, setMedicationData] = useState({
        medicationName: '',
        ingredients: '',
        dosage: '',
        strength: '',
        instructions: '',
        timing: '',
        administrationMethod: '',
        startDate: '',
        endDate: '',
        allergies: '',
        sideEffects: '',
        prescriptionImage: null,
        medicationImage: null
    });

    const handleImageChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            setMedicationData(prev => ({
                ...prev,
                [type]: file
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/dashboard" className="text-white text-xl font-bold">
                        Magnus Health
                    </Link>
                    <Link to="/dashboard" className="text-white">
                        Back to Dashboard
                    </Link>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold mb-6">Medication Registration Form</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Medication Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Medication Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Medication Name
                                    </label>
                                    <input
                                        type="text"
                                        value={medicationData.medicationName}
                                        onChange={(e) => setMedicationData({ ...medicationData, medicationName: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Active Ingredients
                                    </label>
                                    <input
                                        type="text"
                                        value={medicationData.ingredients}
                                        onChange={(e) => setMedicationData({ ...medicationData, ingredients: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Strength/Concentration
                                    </label>
                                    <input
                                        type="text"
                                        value={medicationData.strength}
                                        onChange={(e) => setMedicationData({ ...medicationData, strength: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Usage Instructions */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Usage Instructions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Dosage
                                    </label>
                                    <input
                                        type="text"
                                        value={medicationData.dosage}
                                        onChange={(e) => setMedicationData({ ...medicationData, dosage: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Timing
                                    </label>
                                    <input
                                        type="text"
                                        value={medicationData.timing}
                                        placeholder="e.g., After meals, Before bedtime"
                                        onChange={(e) => setMedicationData({ ...medicationData, timing: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Administration Method
                                    </label>
                                    <select
                                        value={medicationData.administrationMethod}
                                        onChange={(e) => setMedicationData({ ...medicationData, administrationMethod: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Select Method</option>
                                        <option value="oral">Oral</option>
                                        <option value="topical">Topical</option>
                                        <option value="injection">Injection</option>
                                        <option value="inhaler">Inhaler</option>
                                        <option value="drops">Drops</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Detailed Instructions
                                    </label>
                                    <textarea
                                        value={medicationData.instructions}
                                        onChange={(e) => setMedicationData({ ...medicationData, instructions: e.target.value })}
                                        rows={3}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Treatment Period */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Treatment Period</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        value={medicationData.startDate}
                                        onChange={(e) => setMedicationData({ ...medicationData, startDate: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        value={medicationData.endDate}
                                        onChange={(e) => setMedicationData({ ...medicationData, endDate: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Health Considerations */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Health Considerations</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Known Allergies
                                    </label>
                                    <textarea
                                        value={medicationData.allergies}
                                        onChange={(e) => setMedicationData({ ...medicationData, allergies: e.target.value })}
                                        rows={2}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Possible Side Effects
                                    </label>
                                    <textarea
                                        value={medicationData.sideEffects}
                                        onChange={(e) => setMedicationData({ ...medicationData, sideEffects: e.target.value })}
                                        rows={2}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Document Upload */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Document Upload</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Prescription/Doctor's Note
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*,.pdf"
                                        onChange={(e) => handleImageChange(e, 'prescriptionImage')}
                                        className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Medication Image
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, 'medicationImage')}
                                        className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Register Medication
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MedicationForm;
