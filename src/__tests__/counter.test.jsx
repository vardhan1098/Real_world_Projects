import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Counter from "../components/Counter";

test("check the value is Updated", () => {
  const { getByText } = render(<Counter />);
  const getCheckTheCount = getByText("Count is: 0");
  const getButtonIsClicked = getByText("Increase");

  fireEvent.click(getButtonIsClicked);

  expect(getCheckTheCount.textContent).toBe("Count is: 1");
});
