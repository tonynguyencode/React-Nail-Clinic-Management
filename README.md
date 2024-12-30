# Nail Clinic Management
This repository contains a nail clinic frontend application built with React and Spring Security. This project focuses on building a basic and user-friendly interface for the customer and management of a nail salon.

# Feature
Customer:
  - Sign-up an account with email address, full name, and phone number.
  - An customer can request an appointment via the appointment page with their choice of technician.

Management:
  - the management need to sign-in with an admin role via the UI to access the dashboard page.
  - can manage the clinic appointments via the appointment dashboard after sign-in with their admin account.
  - can manually approve, add, and remove appointments.

Services:
  - Customer: Add, modify, and delete customer profiles.
  - Appointment: Add, modify, and delete appointment information.
  - Admin: need to be authenticated to access appointment dashboard to manage important customer and appointment information for the nail clinic.

# Workflow
Adding a Customer:
  - Customer initiates a request via the UI from the sign-up page.
  - The React client send the request via the traditional FETCH feature.
  - Customer management service process the request and adds the customer to the MySQL database.

Scheduling an Appointment:
  - The Customer needed to sign-in to access the appointment booking page.
  - Customer schedules an appointment via the UI from the appointment page.
  - The React client send the request via the traditional FETCH feature.
  - Appointment management service coordinates the operation and records the appointment.

# Architecture and Observability

Framework:
  - Built with Spring Boot and Spring Security.
  - Use Java, Maven, MySQL, Docker, and IntelliJ for Development.
    
Communication:
  - RESTful API for the backend.
  - Html, JSX, CSS, and FETCH for the Frontend.

Data Management:
  - Spring Data, JPA, and EntityManager with raw SQL queries.
  - MySQL database in a Docker container for efficient data management during development.

# Development Progress
Backend:
  - Currently working to learn how to properly deployed this application either via clouds or Docker containerzation.
  - Implementing role-based authorization features using Spring Security, ensuring secure access control and enhanced application security.
  - Creating Appointment APIs endpoint, service, and repository.
  - Manually insert technicians information via SQL queries so the customer can pick their choice of technician.

Frontend:
  - Adding more features to the management appointment dashboard such as adding, approve or deny an appointment.
  - Improving the sign-in page to be more user-friendly and looking better with React.
  - Adding a Model page where the customers can see the our technician's works.
  - Enhanced homepage interactions and refined styling to improve user experience, ensuring a more visually appealing and engaging design.

# Images

![Screenshot 2024-12-29 212928](https://github.com/user-attachments/assets/02cf20af-c8c8-45a3-a24f-948ecd98dd0b)
![appointmentBooking](https://github.com/user-attachments/assets/61811b5a-a550-48fd-a0e9-937057c306b5)
![sign-inPage](https://github.com/user-attachments/assets/32a2f1d8-2b3c-40f3-956c-113cdbcbe2c2)

