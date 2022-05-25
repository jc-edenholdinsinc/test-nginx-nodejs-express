
require("dotenv").config()
const client = require('@mailchimp/mailchimp_marketing');
client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const run = async () => {
  const response = await client.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
    email_address: "jcsantosdevtest6@gmail.com",
    status: "subscribed",
  });

  if (response.errors.length) {
    throw new Error(response.errors);
  } else {
      console.log("no issue!");
  }

//   console.log(JSON.stringify(response))
//   console.log(searchParams.get('status'));
};

run().catch(errors => console.log(errors));


// const express = require("express");
// const bodyParser = require('body-parser');
// const cors = require("cors")
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));


// app.post('/subscribe', cors(), (req, res) => {
//     console.log(req.body)
//     res.json(req.body)
// });

// app.listen(5000, () => {
//     console.log('App listening on port 5000!');
// });