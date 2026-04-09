Medical Appointment Booking
🏥 Project Overview
Medical Appointment Booking is a web-based platform developed for StayHealthy Inc., a non-profit organization dedicated to bringing medical resources to remote areas. As part of the "Go Digital" initiative, this website serves as a bridge between patients in underserved locations and healthcare professionals, ensuring timely consultations and reducing the risks associated with long-distance travel for medical care.

📋 Problem Statement
In many remote areas, patients face a 50-mile gap between themselves and the nearest healthcare facility. Excessive wait times and lack of specialist access often lead to life-threatening situations. By leveraging increasing broadband availability, this platform provides immediate access to general physicians and specialists.

🚀 Phase 1 Features
The initial rollout focuses on the core functionality required to connect patients with doctors:

Doctor Listing: View available doctors, including their ratings, reviews, and specific specialties. Search functionality by doctor name is included.

Medical Appointments Online: Schedule appointments based on real-time availability slots.

Consultation Feedback: Rate and review consultations based on diagnosis effectiveness and communication.

Profile Management: Secure sign-up/login flow. Users manage personal health data including age, blood group, and medical records.

🛠 Developer Instructions: Frontend & Navigation
As the front-end developer, the primary focus is on usability and accessibility.

Navigation Bar Specifications
The navigation bar is a persistent component visible across all routes to ensure minimal click-depth.

Core Links: Appointments, Reviews, Sign-up, and Login.

Design Constraints:

Height: 40px – 80px.

Spacing: Minimum 10px – 20px gap between elements.

Typography: Clear, high-contrast labeling for accessibility.

Implementation Tips: * Use a horizontal layout for the main menu.

Utilize Figma vector tools for intuitive icons.

Ensure the design is responsive for users on various devices in remote areas.

📁 Project Structure
The source code is located within the grihf-frontend_capstone_starter_code directory.

Plaintext
grihf-frontend_capstone_starter_code/
├── public/          # Static assets
├── src/
│   ├── components/  # Navigation, Doctor Cards, etc.
│   ├── pages/       # Home, Appointments, Profile
│   └── assets/      # Icons and Images
└── README.md        # Project documentation
🔐 Security & Data
Access Control: Patient records are strictly restricted to the specific doctor and the patient.

Mandatory Info: Users must provide Name, Address, Phone, Age, and Blood Group to book a consultation.

📅 Future Roadmap
Future phases will introduce:

News Feeds: Educational videos and daily health tips.

Advanced Admin: Analytics on patient demographics and provider performance.

Instant Consultations: On-demand meetings without prior appointments.

Record Downloads: Ability for patients to download test reports and prescriptions.