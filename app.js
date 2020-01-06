const http = require('http');
const request = require('request');
const port = 3000;
const server = http.createServer();
server.on('request', async (req, res) => {
  const data = await getInstanceId();
  console.log(data);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hi, this response is from: ' + data);
  res.end();
});

server.listen(port, "0.0.0.0", () => {
  console.log('Server running now');
});

async function getInstanceId(){
  return new Promise((resolve, reject) => {
    request('http://169.254.169.254/latest/meta-data/instance-id', function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      resolve(body);
    })
  });
}