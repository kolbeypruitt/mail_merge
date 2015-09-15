module.exports = {
  buildEmailObjects: function(requestBody) {
    var arrayRecips = requestBody.recipient.split("\n");
    var emails = [];
    for (var i = 0; i < arrayRecips.length; i++) {
      emails.push({recipient: arrayRecips[i],
      subject: requestBody.subject,
      emailBody: requestBody.emailBody})
    }
    return emails
  }

}