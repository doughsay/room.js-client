var username = 'chris'
  , password = 'p@ssw0rd';

function sendDelayed(str, done) {
  input(str);
  window.setTimeout(function() {
    send();
    if (done) {
      done();
    }
  }, 50);
}

sendDelayed('eval off', function() {
  sendDelayed('login', function() {
    sendDelayed(username, function() {
      sendDelayed(password, function() {
        sendDelayed('play', function() {
          sendDelayed('wizard', function() {
            sendDelayed('eval on', function() {
              sendDelayed('clear');
            });
          });
        });
      });
    });
  });
});
