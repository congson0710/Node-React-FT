const keys = require('../../config/key');

module.exports = survey => {
  return `
  <html>
    <body>
        <div style="text-align: center;">
            <h3>I'd like your input!</h3>
            <p>${survey.body}</p>
        <div>
        <a href="${keys.redirectDomain}/api/survey/${survey.id}/yes">Yes</a>
        </div>
        <div>
        <a href="${keys.redirectDomain}/api/survey/${survey.id}/no">No</a>
        </div>
        </div>
    </body>
  </html>`;
};