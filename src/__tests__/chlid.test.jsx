import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Chlid from "../components/chlid";

test("check the Props value is updated",()=>{
    const { getByTestId} = render(<Chlid count={5}/>);
    const getPropsValue = getByTestId("count");

    expect(getPropsValue.textContent).toBe("5")
})