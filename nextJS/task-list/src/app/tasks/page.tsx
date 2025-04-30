"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Input,
  Pagination,
  Table,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Task, TaskType } from "./Task";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Storage } from "@/utils/storage";
import { BiTask } from "react-icons/bi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const pageSize = 8;
  const count = search
    ? tasks.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
        .length
    : tasks.length;

  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;

  const visibleItems = tasks.slice(startRange, endRange);

  // When the tasks change, update the local storage
  useEffect(() => {
    if (tasks.length !== 0) {
      Storage.set("tasks", tasks);
    }
  }, [tasks]);

  // Load the tasks from local storage
  useEffect(() => {
    setTasks(Storage.get("tasks") || ([] as TaskType[]));
  }, []);

  const handleInputSet = () => {
    if (!titleRef.current) return null;

    const titleValue = titleRef.current.value;

    setTasks((prev) => {
      const prevTasks = [...prev];

      prevTasks.push({ title: titleValue, isDone: false });

      return prevTasks;
    });

    titleRef.current.value = "";
  };

  const handleClear = () => {
    const isConfirmed = confirm("Do you really want to delete all the tasks?");

    if (!isConfirmed) return;

    setTasks([]);
    Storage.set("tasks", []);
  };

  const renderTasks = ({ title, isDone }: TaskType, index: number) => {
    return (
      <Task
        title={title}
        itemsPerPage={pageSize}
        currentPage={page}
        isDone={isDone}
        index={index}
        setTasks={setTasks}
        key={index}
      />
    );
  };

  return (
    <Box p={8}>
      <Heading display="flex" alignItems="center" mb={2}>
        <BiTask style={{ marginRight: 8 }} />
        Task list
      </Heading>

      <Input
        variant="flushed"
        placeholder="The task name you want to search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        mb={8}
      />

      <Flex gapX={4} mb={4}>
        <Input
          variant="outline"
          placeholder="Your task title..."
          ref={titleRef}
          onKeyDown={(event) => {
            event.key === "Enter" && handleInputSet();
          }}
        />

        <Button variant="solid" onClick={handleInputSet}>
          <FaPlus />
        </Button>

        <Button variant="surface" onClick={handleClear}>
          <FaTrash />
        </Button>
      </Flex>

      <Table.Root variant="outline" mb={4}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Task</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
            <Table.ColumnHeader>Action</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {search
            ? tasks
                .filter((t) =>
                  t.title.toLowerCase().includes(search.toLowerCase()),
                )
                .map(renderTasks)
            : visibleItems.map(renderTasks)}
        </Table.Body>
      </Table.Root>

      <Pagination.Root
        count={count}
        pageSize={pageSize}
        page={page}
        onPageChange={(e) => setPage(e.page)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="full"
      >
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Box>
  );
};
