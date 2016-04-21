var should = require('should')
var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs');

describe('that initially the box has UAC disabled', function() {
  it('can run a command with elevated privileges without prompting', function(done) {
    var child = spawn('cmd.exe',
    ['/c', path.join(__dirname, 'utils', 'elevate.cmd'), 'cmd.exe', '/c', 'echo "some".>C:\\somefile.txt'],
    {stdio: 'pipe'})
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('exit', function () {
      console.log('exited')
    })
    setTimeout(function () {
      fs.readFile('C:\\somefile.txt', function (err, data) {
        err && console.error('err %s\n%j', err, err)
        (err===null).should.eql(true);
        data.toString().should.match(/some/);
        fs.unlink('C:\\somefile.txt', function (err2) {
          (err2===null).should.eql(true);
          done()
        })
      })
    }, 1000)
  });
});
