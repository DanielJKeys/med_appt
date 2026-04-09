import React, { useEffect, useState } from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Mock data: Ensuring the reportName matches the file in your public folder
        const reportData = [
            { 
                id: 1, 
                doctorName: "Dr. John Doe", 
                speciality: "Cardiology", 
                reportName: "patient_report.pdf" 
            },
            { 
                id: 2, 
                doctorName: "Dr. Jane Smith", 
                speciality: "Dermatology", 
                reportName: "patient_report.pdf" 
            }
        ];
        setReports(reportData);
    }, []);

    // Function to open the report in a new tab
    const handleViewReport = (reportName) => {
        const reportPath = `/${reportName}`;
        window.open(reportPath, "_blank");
    };

    return (
        <div className="reports-container">
            <h1>Your Medical Reports</h1>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>View Report</th>
                        <th>Download Report</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <tr key={report.id}>
                            <td>{index + 1}</td>
                            <td>{report.doctorName}</td>
                            <td>{report.speciality}</td>
                            <td>
                                {/* Clickable element to open report in a new tab */}
                                <button 
                                    className="btn-view" 
                                    onClick={() => handleViewReport(report.reportName)}
                                >
                                    View Report
                                </button>
                            </td>
                            <td>
                                {/* Anchor tag with download attribute */}
                                <a 
                                    href={`/${report.reportName}`} 
                                    download={`Report_${report.doctorName.replace(" ", "_")}.pdf`} 
                                    className="btn-download"
                                >
                                    Download PDF
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;