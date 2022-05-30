import * as React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { AddTask } from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Title from "./Title";

function TaskManager(props) {
  const { tasks, setTasks } = props;
  const [task, setTask] = useState("");

  function addTask(newTask) {
    if (newTask !== null && newTask !== "") {
      setTask(newTask);
      handleNewTask(newTask);
    }
  }

  function handleNewTask(newTask) {
    const newTasks = [
      ...tasks,
      {
        description: newTask,
        isComplete: false,
      },
    ];
    setTasks(newTasks);
    console.log(tasks);
  }

  return (
    <React.Fragment>
      <Title>To-Do</Title>

      <div>
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} setTasks={setTasks} />
        ) : (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            padding={2}
          >
            <Typography color="text.secondary">Add a task below...</Typography>
          </Box>
        )}
      </div>
      <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
        <Button
          style={{ color: "darkorange", textTransform: "none" }}
          onClick={() => {
            const newTask = prompt("What is your task?");
            addTask(newTask);
          }}
        >
          <AddIcon />
          <Typography color="text.secondary">Add Task</Typography>
        </Button>
      </Box>
    </React.Fragment>
  );
}

function TaskList(props) {
  const { tasks, setTasks } = props;
  setTasks(tasks);
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default TaskManager;
