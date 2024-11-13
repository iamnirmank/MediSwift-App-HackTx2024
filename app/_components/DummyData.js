const conversation = [
  {
    speaker: "Chatbot",
    message: ["Hello, I am a bot. Welcome to Mediswift!"],
    action: false
  },
  {
    speaker: "Human",
    message: ["When will my report be ready?"],
    action: false
  },
  {
    speaker: "Chatbot",
    message: ["Your patient report is now ready to view."],
    action: true,
    actionMessage: "Click here to view your report",
    actionLink: "https://mediswift.com/patient-report/12345"
  },
  {
    speaker: "Human",
    message: ["Thank you!"],
    action: false
  },
  {
    speaker: "Chatbot",
    message: ["Is there anything else I can help you with?"],
    action: false
  },
  {
    speaker: "Human",
    message: [
      "Actually, yes. Can you remind me what tests were included in this report?",
      "And were any additional tests recommended?"
    ],
    action: false
  },
  {
    speaker: "Chatbot",
    message: [
      "Sure! Your report includes blood count, cholesterol levels, and a metabolic panel.",
      "There were no additional tests recommended, but it’s always good to consult with your doctor about next steps."
    ],
    action: false
  },
  {
    speaker: "Human",
    message: ["That’s helpful. Could I schedule a follow-up appointment?"],
    action: false
  },
  {
    speaker: "Chatbot",
    message: ["Of course! I can help with that."],
    action: true,
    actionMessage: "Click here to schedule a follow-up appointment",
    actionLink: "https://mediswift.com/schedule-appointment"
  },
  {
    speaker: "Human",
    message: ["Thanks. One last question – is there a way to get a digital copy of my report?"],
    action: false
  },
  {
    speaker: "Chatbot",
    message: ["Yes, you can download a PDF version of your report directly from the report page."],
    action: true,
    actionMessage: "Go to your report to download",
    actionLink: "https://mediswift.com/patient-report/12345/download"
  },
  {
    speaker: "Human",
    message: ["Great, I think that’s everything for now. Thank you for your help!"],
    action: false
  },
  {
    speaker: "Chatbot",
    message: ["You’re very welcome! Take care, and reach out if you need further assistance."],
    action: false
  }
];


  
  export default conversation;





