// dialogflow.js

// Function to interact with Dialogflow API
export const detectIntent = async (userMessage) => {
  try {
    // Send user message to Dialogflow API
    const response = await fetch('https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_DIALOGFLOW_API_KEY',
      },
      body: JSON.stringify({
        queryInput: {
          text: {
            text: userMessage,
            languageCode: 'en-US',
          },
        },
      }),
    });

    // Parse the JSON response
    const data = await response.json();

    // Extract and return the bot's response
    return data.queryResult.fulfillmentText;
  } catch (error) {
    console.error('Error detecting intent:', error);
    throw new Error('Failed to detect intent');
  }
};
