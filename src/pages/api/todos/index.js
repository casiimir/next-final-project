import dbConnect from "@/utils/dbConnect";
import Todo from "@/models/Todo";

export default async function handler(req, res) {
  const { method } = req.method;

  dbConnect();

  switch (method) {
    case "GET":
      try {
        const todos = await Todo.find({});

        res.status(200).json({ success: true, data: todos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Metodo ${method} non accettato.`);
  }
}
