export function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const adminToken = process.env.ADMIN_TOKEN || "salvin-admin-token";

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  if (token !== adminToken) {
    res.status(401).json({ error: "Invalid or expired token" });
    return;
  }

  req.admin = { id: "frontend-admin", username: process.env.ADMIN_USERNAME || "admin" };
  next();
}
