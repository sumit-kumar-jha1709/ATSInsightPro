# ATSInsightPro

![ATSInsightPro Logo](images/ATSInsightPro_Logo.png)

Revolutionize your resume crafting with ATSInsightPro, our cutting-edge React app. This application seamlessly integrates the OpenAI API and Chakra UI to provide essential keywords, ensuring your resume sails through Applicant Tracking Systems (ATS) for guaranteed visibility and success.

# ATSInsightPro

![ATSInsightPro Logo](images/ATSInsightPro_Logo.png)

Revolutionize your resume crafting with ATSInsightPro, our cutting-edge React app. This application seamlessly integrates the OpenAI API and Chakra UI to provide essential keywords, ensuring your resume sails through Applicant Tracking Systems (ATS) for guaranteed visibility and success.




## Key Features

ATSInsightPro simplifies the resume crafting process with the following key features:

- **Intuitive Interface:** When started on `localhost:3000`, users can enter the job description in the text area.
  
- **AI-Powered Keyword Extraction:** Clicking on the "Extract Keyword" button sends the entered text, along with an inbuilt prompt, to the OpenAI AI model (`text-davinci-002`).
  
- **Keyword Presentation:** The API returns keywords separated by commas, presented in a modal created using Chakra UI.
  
- **Resume Optimization:** Users can effortlessly incorporate the extracted keywords into their resumes, increasing the likelihood of passing through ATS.


## Technologies Used

- Frontend: ReactJS 
- UI Framework: Chakra UI
- API: OpenAI API
- AI Model: text-davinci-002


## How to Use

1. **Fork the Repo:** Start by forking the ATSInsightPro repository to your GitHub account.

2. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ATSInsightPro.git
   cd ATSInsightPro
   ```

3. **Add OpenAI API Key:**
   Obtain your OpenAI API key and add it to line 25 in `App.js`.

   ```javascript
   Authorization : `Bearer ${'Add your openAI API key'}`
   ```

4. **Save Changes:**
   Save your changes in `App.js`.

5. **Run the App:**
   Open the terminal and run the following commands:
   ```bash
   npm install
   npm start
   ```
   The app will start on `localhost:3000`.

## Feedback

We value your feedback! If you have any suggestions or encounter issues, please don't hesitate to reach out to the maintainer.

Maintainer: [Sumit Kumar Jha](https://linkedin.com/in/sumitkumarjha-)


Your input helps us improve ATSInsightPro and make it even more powerful for crafting effective resumes.

---

![Thank You](images/thank_you.gif)