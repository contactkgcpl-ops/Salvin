import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET || "change-this-secret");
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
