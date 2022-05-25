
// const client = require('@mailchimp/mailchimp_marketing');

// mailchimp api: af264fb16b9220ae70f5907cf6b2d2d9-us12
// audience id: b0d1082743
// server: us12

// const audienceId = b0d1082743;
// client.setConfig({
//   apiKey: "af264fb16b9220ae70f5907cf6b2d2d9-us12",
//   server: "us12",
// });

// const run = async () => {
//   const response = await client.lists.addListMember(audienceId, {
//     email_address: "jcsantosdevtest4@gmail.com",
//     status: "subscribed",
//   });
//   console.log(response);
// };

// run();

const express = require("express");

const app = express();

app.post('/subscribe', (req, res) => {

});

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});