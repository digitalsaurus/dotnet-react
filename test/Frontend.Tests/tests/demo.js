module.exports = {
  'Demo test': (client) => {
    client.url(client.launchUrl);
    
    client.end();
  }
}