"use strict";

const NaturalLanguageClassifierV1 = require("watson-developer-cloud/natural-language-classifier/v1");
const fs = require("fs");

const natural_language_classifier = new NaturalLanguageClassifierV1({
  username: "<USERNAME>",
  password: "<PASSWORD>",
  version: "v1"
});

// Creating a classifier
const params = {
  language: "en",
  name: "<CLASSIFER NAME>",
  training_data: fs.createReadStream("<FILE PATH AND NAME TO CSV FILE>")
};

natural_language_classifier.create(params, function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});
