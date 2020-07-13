module.exports = app => {
  app.post('/api/send', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    console.log(req.body.message);
    res.status(200).send('OK');
  });
};
