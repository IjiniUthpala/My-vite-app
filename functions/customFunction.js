// functions/customFunction.js
exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from your custom Netlify Function!' }),
    };
  };
  