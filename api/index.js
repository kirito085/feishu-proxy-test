export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).send('Worker is alive');
  } else {
    res.status(405).send('Only GET allowed');
  }
}
