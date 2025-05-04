export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) return res.status(400).send("Missing ID");

  const streamUrl = `http://opplex.tv:8080/live/15sep.fahad.baig/5614696/${id}.ts`;

  const response = await fetch(streamUrl, {
    headers: {
      'User-Agent': 'VLC/3.0.16',
      'Accept': '*/*',
      'Icy-MetaData': '1',
      'Connection': 'keep-alive'
    }
  });

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'video/mp2t');

  response.body.pipe(res);
}
