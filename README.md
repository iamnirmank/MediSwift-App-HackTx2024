# MediSwift

MediSwift is an AI-powered health assistant designed to streamline the treatment process for patients and doctors. By automating essential tasks, MediSwift reduces wait times and costs, offering accessible, timely, and affordable healthcare.

## Inspiration
After experiencing the challenges of delayed treatment and high medical costs, we saw the need for a more efficient, affordable healthcare solution. MediSwift addresses this need by digitalizing and automating healthcare processes using AI, enabling timely and cost-effective care—especially valuable for individuals with limited healthcare access or living abroad.

## My Contributions

During the development of MediSwift, I contributed to the backend, API integration, and AI implementation to support the end-to-end healthcare process:

- **Backend Development**: Built and managed Django-based API endpoints to enable seamless communication between patients and doctors, supporting functionalities like patient record management, diagnosis processes, and doctor feedback.
- **API Integration**: Implemented and optimized the API layer, ensuring robust, secure, and efficient data exchange across frontend and backend components. This facilitated smooth integration of patient and doctor interfaces for real-time data synchronization.
- **AI Integration**: Integrated a large language model (LLM) for symptom analysis and preliminary diagnosis, fine-tuning it to work with healthcare data and optimizing it with techniques such as LoRA and PERT. This enhanced efficiency within resource constraints, making the system adaptable to limited device capabilities and internet access.

## Features
- **Symptom Collection**: Patients describe symptoms via a chatbot; the AI guides follow-up questions to gather detailed information for better analysis.
- **AI-Powered Diagnosis**: The LLM provides a preliminary diagnosis based on symptom data, which doctors then review and finalize.
- **Treatment and Follow-Up**: Doctors can approve diagnoses, offer prescriptions, and suggest follow-ups. Automated reminders help patients stay on track with their treatment.

## Tech Stack
- **Frontend**: Built with Next.js
- **Backend**: Developed on Django, with Django-based APIs for secure data exchange.
- **AI**: Utilizes a fine-tuned LLM and prompt engineering optimized for healthcare data analysis.

## Challenges
We faced limitations in device capabilities and internet access, which made fine-tuning the AI challenging. By using PERT and LoRA, we were able to develop an efficient MVP, though ultimately, we relied on prompt engineering to achieve reliable performance within the constraints of the hackathon environment.

## Accomplishments
In just 24 hours, we developed a working MVP that integrates core features across frontend, backend, and AI systems. The prototype provides a functional interface for both patients and doctors, delivering a practical solution for real-world healthcare needs.

## Project Links
- **Frontend Project**: [GitHub - Frontend](https://github.com/iamnirmank/MediSwift-App-HackTx2024.git)
- **Backend Project**: [GitHub - Backend](https://github.com/iamnirmank/MediSwift-Api-HackTx2024.git)
- **Doctor Dashboard**: [Dashboard](https://mediswift.tech/doctordashboard), [Report View](https://mediswift.tech/reportdoctor)
- **Patient App**: [MediSwift App](https://mediswift.tech/)

## Next Steps
Our next goal is to refine the MVP by expanding AI capabilities to recognize and support a broader range of medical conditions. Over the next three months, we aim to release a full prototype for user testing, backed by more comprehensive health data and fine-tuning.

## Hackathon
MediSwift was developed as part of **HackTX 2024**, where our team collaborated to create an impactful healthcare solution within a short timeframe.

## Additional Resources
- **Project on Devpost**: [MediSwift on Devpost](https://devpost.com/software/mediswift)
- **Assets**: Some assets were used from Freepik.
