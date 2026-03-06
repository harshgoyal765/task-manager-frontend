import { render, screen } from "@testing-library/react";
import TaskCard from "../src/components/TaskCard";

const task = {
title: "Test Task",
description: "Testing description",
status: "pending"
};

test("renders task title", () => {

render(<TaskCard task={task} />);

const title = screen.getByText("Test Task");

expect(title).toBeInTheDocument();

});