import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-east-1' });

async function sendMail(event, context) {
  const params = {
    Destination: {
      ToAddresses: ['rsutisna@vitusvet.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Ray!',
        },
      },
      Subject: {
        
      }
    },
  };
  return event;
}

export const handler = sendMail;
