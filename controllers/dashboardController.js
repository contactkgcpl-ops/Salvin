import { asyncHandler } from "../utils/asyncHandler.js";
import { getCounts, getRecentMachines } from "../models/machineModel.js";

export const getDashboard = asyncHandler(async (req, res) => {
  const counts = await getCounts();
  const recentMachines = await getRecentMachines(5);
  res.json({ ...counts, recent_machines: recentMachines });
});
