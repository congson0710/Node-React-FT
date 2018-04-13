const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/sendgrid');
const surveyTemplate = require('../services/emailTemplate/surveyTemplate');

const Survey = mongoose.model('survey');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // best place to send mail
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
