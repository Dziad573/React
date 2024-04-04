import React from "react";
import Image from "../Image";
import { render } from "@testing-library/react";

describe ('Image Component', () => {
    it("Should render image component", () => {
        render(<Image/>)
    })
})