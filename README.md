# VITAGUARD
## Micronutrient Tracker Website

VitaGuard is a comprehensive, user-friendly website built with the **MERN stack** to help users track their daily vitamin and mineral intake and make informed dietary choices. This tool aims to provide essential insights into your diet to help you make healthier decisions.

### Key Features

- **User Authentication:** Secure sign-up and login with JWT token-based authentication to ensure data privacy.
  
- **Custom Nutrient Tracking:** Users can log food items or recipes, using API calls to retrieve detailed nutritional information.

- **Real-Time Visualization:** Nutrient intake is visualized through interactive pie charts and graphs to provide clear insights into daily consumption levels.

- **Notifications and Reminders:** Automated notifications alert users about any deficiencies or overconsumption of certain nutrients, helping them adjust their diet as needed.

- **API Integration:** Integration with third-party nutrition APIs ensures the accuracy of nutritional data, supporting precise tracking for a broad range of foods.

- **Data Storage and Management:** MongoDB is used to store user data securely, supporting efficient data handling and retrieval for each user’s dietary history.

- **Future Scope:** Planned features include an OCR-based medical report scanner to interpret health data directly from user-uploaded documents and provide tailored nutrition recommendations based on clinical values.

This project provides an essential tool for users aiming to improve their health through mindful nutrient tracking and informed dietary habits.

---

## How to Clone and Set Up VitaGuard

Follow these steps to clone and run the **VitaGuard** Micronutrient Tracker website locally:

### Prerequisites

Ensure that the following are installed on your system:
- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - Comes with Node.js
- **MongoDB** - [Download MongoDB](https://www.mongodb.com/try/download/community) or use a cloud service like MongoDB Atlas.

### Step 1: Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/VitaGuard.git
cd VitaGuard

### Step 2: Set Up Backend

1. Navigate to the **backend** folder:

2. Install the required dependencies:

3. Set up your **MongoDB** connection:
   - Ensure MongoDB is running locally or use MongoDB Atlas for cloud storage.
   - Create a `.env` file in the **backend** directory and add your MongoDB connection URI:

4. Start the backend server:


The backend should now be running at `http://localhost:5000`.

### Step 3: Set Up Frontend

1. Navigate to the **frontend** folder:

2. Install the required dependencies:

3. Start the frontend development server:

The frontend should now be running at `http://localhost:5173`.

### Step 4: Access the Website

- Open your browser and navigate to `http://localhost:5173` to access the VitaGuard website.
- You can sign up or log in to start tracking your micronutrient intake.

### Step 5: (Optional) Deploy to Production

If you'd like to deploy the website to production, you can use services like **Heroku** for the backend and **Vercel** or **Netlify** for the frontend. Refer to their documentation for deployment guides.

---

Feel free to open issues or contribute to the project if you have any ideas or improvements!


