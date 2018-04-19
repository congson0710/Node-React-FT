const mongoose = require('mongoose');
const Path = require('path-parser').default;
const _ = require('lodash');
const { URL } = require('url');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/sendgrid');
const surveyTemplate = require('../services/emailTemplate/surveyTemplate');

const Survey = mongoose.model('survey');

module.exports = app => {
  app.post('/api/surveys/webhooks', (req, res) => {
    const events = _.map(req.body, event => {
      const pathname = new URL(event.url).pathname;
      console.log('result 1:', pathname);
      const p = new Path('/api/surveys/:surveyId/:choice');
      console.log('result 2: ', p.test(pathname));
    });
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
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

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
