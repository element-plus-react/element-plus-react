import React from "react";
import { describe, expect, it } from "vitest";
import Watermark from "..";

const AXIOM = "Rem is the best girl";

describe("Watermark", () => {
  it("create", () => {
    const wrapper = <Watermark className="watermark">{AXIOM}</Watermark>;

    expect(wrapper.props.className).toContain("watermark");
    expect(wrapper).toMatchSnapshot();
  });

  it("slots", () => {
    const wrapper = <Watermark>{AXIOM}</Watermark>;

    expect(wrapper.props.children).toContain(AXIOM);
  });
});
