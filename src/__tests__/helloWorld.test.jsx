import React from "react";
import "@testing-library/jest-dom"
import { render } from "@testing-library/react";
import HelloWorld from "../components/helloWorld";

test("render hello world text", () => {
  const { getByText } = render(<HelloWorld />);
  const checkHelloWorldText = getByText("Hello World");

  expect(checkHelloWorldText).toBeInTheDocument();
});
 
test("check the text with id",()=>{
    const { getByTestId } = render(<HelloWorld/>);
    const checkMyNameWithId = getByTestId("name");

    expect(checkMyNameWithId.textContent).toBe("Sasi Vardhan Reddy");
});

test ("check with id only", ()=>{
    const {container} = render (<HelloWorld/>);
    const getElementId = container.querySelector('[data-id ="cool"]');

    expect(getElementId.textContent).toBe("Test me U can");
})