export function home(req, res) {
  res.send({ holi: 'jijij' });
}

export function test(req, res) {
  return res.send({ test: 'jiji' });
}
