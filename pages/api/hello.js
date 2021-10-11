// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {
    return res.status(200).send({ hello: "world" });
  } catch (e) {
    return res.status(500);
  }
}
