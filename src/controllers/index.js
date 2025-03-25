import { db } from "../db/index.js";

class IndexController {
  async getTasks(req, res) {
    try {
      const tasks = await db.any(
        "SELECT * FROM tasks ORDER BY created_at DESC"
      );
      res.json({
        success: true,
        data: tasks,
        message: "Tasks fetched successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Error fetching tasks",
      });
    }
  }

  async createTask(req, res) {
    const { title, deadline, created_at } = req.body;
    try {
      const result = await db.one(
        "INSERT INTO tasks (title, deadline, status, created_at) VALUES ($1, $2, $3, $4) RETURNING *",
        [title, deadline, "pending", created_at]
      );
      res.status(201).json({
        success: true,
        data: result,
        message: "Task created successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error creating task",
      });
    }
  }

  async updateTaskStatus(req, res) {
    const { id } = req.params;
    const { completed_at } = req.body;
    try {
      const result = await db.one(
        "UPDATE tasks SET status = $1, completed_at = $2 WHERE id = $3 RETURNING *",
        ["completed", completed_at, id]
      );
      res.status(200).json({
        success: true,
        data: result,
        message: "Task status updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating task status",
      });
    }
  }
}

export default IndexController;
