export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).send('Worker is alive');
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Only POST allowed');
  }

  let body;
  try {
    body = req.body;
  } catch (err) {
    return res.status(400).send('Invalid JSON');
  }

  if (body.type === 'url_verification') {
    return res.status(200).json({ challenge: body.challenge });
  }

  if (body.event && body.event.message && body.event.message.message_type === 'image') {
    // ...处理图片消息逻辑
  }

  return res.status(200).send('暂不支持此消息类型');
}
