
require("dotenv").config()
const client = require('@mailchimp/mailchimp_marketing');
const md5 = require('md5')

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const run = async () => {
//   const response = await client.lists.getListMember(process.env.MAILCHIMP_AUDIENCE_ID, md5("jcsantosdevtest6@gmail.com"));
//   console.log(response)
  const response = await client.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
    email_address: "jcsantosdevtest6@gmail.com",
    status: "subscribed",
  });

//   if (response.errors.length) {
//         throw new Error(response.errors);
//   } else {
//         console.log("no issue!");
//   }
//   console.log(response.hasOwnProperty("unique_email_id"))
//   console.log(JSON.stringify(response))
//   console.log(searchParams.get('status'));

  if (!response.hasOwnProperty("unique_email_id")) {
      console.log(response.body)
  } else {
      console.log("successfully added!");
  }
};

run();


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