import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function HealthCheckResults() {
  const { id } = useParams();

  // Demo campaign data
  const campaign = {
    id: parseInt(id) || 1,
    name: "Annual Vision & Hearing Screening",
    date: "2023-06-10",
    examiner: "School Health Department",
    status: "Completed",
  };

  // Demo data for health check results
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Emma Johnson",
      grade: "5th Grade",
      age: 10,
      class: "5A",
      results: {
        vision: {
          leftEye: "20/20",
          rightEye: "20/25",
          colorVision: "Normal",
          notes: "Slight difficulty in right eye, recommended to monitor",
          status: "Pass with observations",
        },
        hearing: {
          leftEar: "Normal",
          rightEar: "Normal",
          notes: "No issues detected",
          status: "Pass",
        },
        height: 142,
        weight: 35,
        bmi: 17.3,
        bmiCategory: "Normal weight",
        followUpNeeded: true,
        followUpReason:
          "Slight vision concern in right eye, recheck in 6 months",
      },
    },
    {
      id: 2,
      name: "Thomas Johnson",
      grade: "8th Grade",
      age: 13,
      class: "8C",
      results: {
        vision: {
          leftEye: "20/40",
          rightEye: "20/40",
          colorVision: "Normal",
          notes:
            "Vision below normal range. Referral for optometrist evaluation recommended.",
          status: "Referral needed",
        },
        hearing: {
          leftEar: "Normal",
          rightEar: "Mild Loss",
          notes: "Mild hearing loss in right ear at higher frequencies",
          status: "Follow-up needed",
        },
        height: 162,
        weight: 52,
        bmi: 19.8,
        bmiCategory: "Normal weight",
        followUpNeeded: true,
        followUpReason:
          "Vision and hearing concerns require follow-up with specialists",
      },
    },
    {
      id: 3,
      name: "Olivia Smith",
      grade: "3rd Grade",
      age: 8,
      class: "3B",
      results: {
        vision: {
          leftEye: "20/20",
          rightEye: "20/20",
          colorVision: "Normal",
          notes: "No issues detected",
          status: "Pass",
        },
        hearing: {
          leftEar: "Normal",
          rightEar: "Normal",
          notes: "No issues detected",
          status: "Pass",
        },
        height: 128,
        weight: 26,
        bmi: 15.9,
        bmiCategory: "Normal weight",
        followUpNeeded: false,
        followUpReason: "",
      },
    },
  ]);

  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Calculate result statistics
  const stats = {
    total: students.length,
    passed: students.filter((s) => !s.results.followUpNeeded).length,
    needFollowUp: students.filter((s) => s.results.followUpNeeded).length,
    visionIssues: students.filter(
      (s) =>
        s.results.vision.status === "Referral needed" ||
        s.results.vision.status === "Follow-up needed" ||
        s.results.vision.status === "Pass with observations"
    ).length,
    hearingIssues: students.filter(
      (s) =>
        s.results.hearing.status === "Referral needed" ||
        s.results.hearing.status === "Follow-up needed"
    ).length,
  };

  // Get the selected student
  const selectedStudent = selectedStudentId
    ? students.find((student) => student.id === selectedStudentId)
    : null;

  // Helper function to get status badge style
  const getStatusBadgeStyle = (status) => {
    if (status === "Pass") {
      return "bg-green-100 text-green-800";
    } else if (status === "Pass with observations") {
      return "bg-yellow-100 text-yellow-800";
    } else if (status === "Follow-up needed" || status === "Referral needed") {
      return "bg-red-100 text-red-800";
    } else {
      return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Health Check Results</h1>
        <p className="text-gray-600">
          Review your child's health screening results
        </p>
      </div>

      {/* Campaign Info Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold mb-4">{campaign.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Date</p>
                <p>{campaign.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Conducted By
                </p>
                <p>{campaign.examiner}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {campaign.status}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                className="h-6 w-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">
                Students Screened
              </div>
              <div className="text-lg font-semibold">{stats.total}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <svg
                className="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">
                Passed All Screenings
              </div>
              <div className="text-lg font-semibold">{stats.passed}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-full">
              <svg
                className="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">
                Need Follow-up
              </div>
              <div className="text-lg font-semibold">{stats.needFollowUp}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg
                className="h-6 w-6 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">
                Vision Issues
              </div>
              <div className="text-lg font-semibold">{stats.visionIssues}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Students and Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Students List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="font-bold text-lg">Students</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {students.map((student) => (
              <button
                key={student.id}
                className={`w-full text-left p-4 hover:bg-gray-50 focus:outline-none flex items-center ${
                  selectedStudentId === student.id ? "bg-blue-50" : ""
                }`}
                onClick={() => setSelectedStudentId(student.id)}
              >
                <div className="flex-shrink-0 h-10 w-10">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{student.name}</h3>
                      <p className="text-sm text-gray-500">
                        {student.grade} | {student.age} years
                      </p>
                    </div>
                    {student.results.followUpNeeded && (
                      <span className="px-2 py-1 text-xs font-medium leading-4 rounded-full bg-red-100 text-red-800">
                        Follow-up
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Result Details */}
        <div className="bg-white rounded-lg shadow lg:col-span-2">
          {selectedStudent ? (
            <div>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold">{selectedStudent.name}</h2>
                <p className="text-gray-500">
                  {selectedStudent.grade} | Class {selectedStudent.class} |{" "}
                  {selectedStudent.age} years old
                </p>
              </div>

              {/* Tabs */}
              <div className="border-b">
                <nav className="flex">
                  <button
                    className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                      activeTab === "overview"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                      activeTab === "vision"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("vision")}
                  >
                    Vision
                  </button>
                  <button
                    className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                      activeTab === "hearing"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("hearing")}
                  >
                    Hearing
                  </button>
                  <button
                    className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                      activeTab === "growth"
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("growth")}
                  >
                    Growth
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            Vision Status
                          </p>
                          <p>
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeStyle(
                                selectedStudent.results.vision.status
                              )}`}
                            >
                              {selectedStudent.results.vision.status}
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            Hearing Status
                          </p>
                          <p>
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeStyle(
                                selectedStudent.results.hearing.status
                              )}`}
                            >
                              {selectedStudent.results.hearing.status}
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            BMI Category
                          </p>
                          <p>{selectedStudent.results.bmiCategory}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            Follow-up Needed
                          </p>
                          <p>
                            {selectedStudent.results.followUpNeeded
                              ? "Yes"
                              : "No"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {selectedStudent.results.followUpNeeded && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-red-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">
                              Follow-up Recommended
                            </h3>
                            <p className="mt-2 text-sm text-red-700">
                              {selectedStudent.results.followUpReason}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 text-right">
                      <Link
                        to="/parent/health-checks"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                      >
                        Download Full Report
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === "vision" && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">
                        Vision Results
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-medium mb-2">Left Eye</p>
                          <p className="text-2xl">
                            {selectedStudent.results.vision.leftEye}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-medium mb-2">Right Eye</p>
                          <p className="text-2xl">
                            {selectedStudent.results.vision.rightEye}
                          </p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="font-medium mb-2">Color Vision</p>
                          <p>{selectedStudent.results.vision.colorVision}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded mb-4">
                      <p className="font-medium mb-2">Notes</p>
                      <p>
                        {selectedStudent.results.vision.notes ||
                          "No additional notes"}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-1">
                        Vision Status
                      </p>
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeStyle(
                          selectedStudent.results.vision.status
                        )}`}
                      >
                        {selectedStudent.results.vision.status}
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "hearing" && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">
                        Hearing Results
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-medium mb-2">Left Ear</p>
                          <p className="text-2xl">
                            {selectedStudent.results.hearing.leftEar}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-medium mb-2">Right Ear</p>
                          <p className="text-2xl">
                            {selectedStudent.results.hearing.rightEar}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded mb-4">
                      <p className="font-medium mb-2">Notes</p>
                      <p>
                        {selectedStudent.results.hearing.notes ||
                          "No additional notes"}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-1">
                        Hearing Status
                      </p>
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeStyle(
                          selectedStudent.results.hearing.status
                        )}`}
                      >
                        {selectedStudent.results.hearing.status}
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "growth" && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">
                        Growth Measurements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-medium mb-2">Height</p>
                          <p className="text-2xl">
                            {selectedStudent.results.height} cm
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-medium mb-2">Weight</p>
                          <p className="text-2xl">
                            {selectedStudent.results.weight} kg
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <p className="font-medium mb-2">BMI</p>
                          <p className="text-2xl">
                            {selectedStudent.results.bmi}
                          </p>
                          <p className="text-sm mt-1">
                            {selectedStudent.results.bmiCategory}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-medium mb-2">BMI Interpretation</h4>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Category
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              BMI Range
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Underweight
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Below 18.5
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Normal weight
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              18.5 - 24.9
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Overweight
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              25.0 - 29.9
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Obesity
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              30.0 and above
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-sm text-gray-500 mt-2">
                        Note: BMI ranges may vary for children and teens.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full p-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  Select a student
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Choose a student from the list to view their health check
                  results
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Help Info */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              If you have any questions about these results or need to schedule
              a follow-up appointment, please contact the school nurse at
              nurse@school.edu or call (555) 123-4567.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthCheckResults;
