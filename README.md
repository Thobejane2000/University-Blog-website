***************************************************
HOW TO RUN?
1. extract the zip,
2. in bash: run > node app.js
3. adminlogin: username>user
4. adminlogin: password>123
***************************************************





Here’s a comprehensive and professional description of your **University Document and Event Management System** website:

---

### University Document and Event Management System  

The University Document and Event Management System is a versatile, full-stack web application designed to facilitate the seamless management and display of key university information for both administrators and visitors. Built using **Node.js**, **Express.js**, **EJS**, **HTML**, **CSS**, and **SQLite**, the platform ensures an intuitive user experience while maintaining robust data handling and secure administrative access.

#### **Key Features**

### **Visitor Side:**
1. **Dynamic Home Page:**
   - Displays a calendar of upcoming university events, allowing visitors to view important dates and detailed event descriptions via interactive pop-ups.
   - Provides a section for university announcements to keep visitors updated on important information.

2. **Photographer Booking System:**
   - Allows visitors to book the university photographer for events by submitting a form with details such as name, student number, date, time, venue, and contact information.

3. **Media Feed with Instagram-like Posts:**
   - Visitors can view a media feed containing images and videos posted by the admin.
   - Posts are displayed as cards with titles, descriptions, locations, categories, and dates.
   - Visitors can like and comment on posts, with comments stored and displayed dynamically.

4. **Document Management and Downloads:**
   - Provides access to essential university documents such as timetables, prospectuses, and policy documents.
   - Visitors can search for and download these documents in PDF, Word, Excel, and PowerPoint formats.

5. **Search Functionality:**
   - Enables visitors to search for posts, events, and documents using keywords or categories, enhancing navigation and accessibility.

6. **About Section:**
   - Includes a dedicated section providing information about the university's values, mission, and history.

---

### **Admin Side:**
1. **Secure Login and Authentication:**
   - Administrators log in with secure credentials to access the admin dashboard.

2. **Event Management:**
   - Admins can add, edit, and delete events from the event calendar.
   - Includes the ability to manage event details such as title, date, description, and location.
   - Events are dynamically rendered on the visitor’s calendar in real time.

3. **Photographer Booking Management:**
   - Admins can view, accept, or reject photographer booking requests.
   - Upon acceptance, an email notification is sent to the photographer, and the booking status is updated in the system.

4. **Post Management:**
   - Admins can create and manage media posts for the visitor’s feed, including uploading images or videos and adding metadata such as title, description, and category.
   - Admins can moderate comments and delete inappropriate or violating posts and comments.

5. **Document Management:**
   - Admins can upload, update, and delete documents and attach a description to each document.
   - All uploaded files are stored in a dedicated directory and managed through the database, allowing for organized document handling.

6. **Announcement Management:**
   - Admins can post important university announcements, which are prominently displayed on the home page for visitors.

---

### **Technical Overview**
- **Frontend:**  
  - Designed using **EJS**, **HTML**, and **CSS** to ensure a responsive, mobile-friendly interface.
  - Features dynamic rendering of content such as events, posts, and documents using server-side templating.

- **Backend:**  
  - Built with **Node.js** and **Express.js** to handle routing, form submissions, data retrieval, and user authentication.
  - Routes are modularized into separate files for maintainability and scalability, including routes for managing events, documents, posts, and bookings.

- **Database:**  
  - Uses **SQLite** for lightweight, server-side data storage and management.
  - Tables include:
    - `users`: For admin authentication.
    - `events`: Stores event details.
    - `bookings`: Tracks photographer booking requests.
    - `posts`: Manages media content.
    - `comments`: Stores visitor comments on posts.
    - `documents`: Tracks uploaded documents and their metadata.

---

### **User Experience (UX) Focus:**
- **Visitor-Friendly Interface:**  
  - No login is required for visitors, providing easy access to events, documents, and media.
  - Sidebars, search bars, and pagination are implemented to enhance navigation and accessibility.

- **Administrative Control:**  
  - Comprehensive dashboard with streamlined management tools for handling various aspects of university content.
  - Focus on data security and integrity with restricted access to admin functionalities.

---

### **Future Enhancements (Scalable Features):**
- Integration with external APIs for email notifications and calendar syncing.
- Addition of user registration and profile management for event attendees.
- Real-time event updates using WebSockets for instant notifications.

This system serves as a centralized platform for managing and disseminating critical university information, enhancing communication between the university and its stakeholders.
