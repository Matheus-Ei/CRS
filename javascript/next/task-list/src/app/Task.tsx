"use-client";

import { Button, Checkbox, Flex, Input, Table } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { TaskTitle } from "./TaskTitle";
import { Storage } from "@/utils/storage";
import { MdCancel } from "react-icons/md";

export interface TaskType {
  title: string;
  isDone: boolean;
}

interface TaskProps {
  title: string;
  isDone: boolean;
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  index: number;
  currentPage: number,
  itemsPerPage: number
}

export const Task = ({ title, isDone, setTasks, index, itemsPerPage, currentPage }: TaskProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const realIndex = (currentPage - 1) * itemsPerPage + index

  const handleDelete = () => {
    const isConfirmed = confirm("Do you really want to delete this tasks?");

    if (!isConfirmed) return;

    setTasks((prev) => {
      const prevTasks = [...prev];

      const newTasks = prevTasks.filter((_, i) => {
        return realIndex !== i;
      });

      if (newTasks.length === 0) {
        Storage.set("tasks", []);
      }

      return newTasks;
    });
  };

  const handleStatusUpdate = () => {
    setTasks((prev) => {
      const prevTasks = [...prev];

      const newIsDone = prev[realIndex].isDone ? false : true;

      prevTasks[realIndex] = { title: prev[realIndex].title, isDone: newIsDone };

      return prevTasks;
    });
  };

  const handleUpdate = () => {
    if (isEditing) {
      setIsEditing(false);
      return;
    }

    setIsEditing(true);
  };

  return (
    <Table.Row key={realIndex}>
      <Table.Cell width="85%">
        <TaskTitle
          isEditing={isEditing}
          title={title}
          setIsEditing={setIsEditing}
          setTasks={setTasks}
          index={realIndex}
        />
      </Table.Cell>

      <Table.Cell width="5%">
        <Checkbox.Root onChange={handleStatusUpdate} defaultChecked={isDone}>
          <Checkbox.HiddenInput />

          <Checkbox.Control />
        </Checkbox.Root>
      </Table.Cell>

      <Table.Cell width="10%">
        <Flex gapX={2}>
          <Button variant="outline" onClick={handleDelete}>
            <FaDeleteLeft />
          </Button>

          <Button variant="outline" onClick={handleUpdate}>
            {isEditing ? <MdCancel /> : <FaEdit />}
          </Button>
        </Flex>
      </Table.Cell>
    </Table.Row>
  );
};
