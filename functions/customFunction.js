// functions/customFunction.js
exports.handler = async function (event) {
    const { name } = event.queryStringParameters || { name: 'Guest' };
    const message = `Hello, ${name}! This message is from your custom Netlify Function!`;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  };
  