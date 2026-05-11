import "@testing-library/jest-dom";

import { capitalize, cn, getLogoSVG, handleLogoExceptions, tagColorMap } from "@/lib/utils";

describe("cn", () => {
  it("should merge multiple class values into a single string", () => {
    const classes = cn("class1", "class2", "class3");
    expect(classes).toBe("class1 class2 class3");
  });

  it("should handle empty inputs", () => {
    const classes = cn();
    expect(classes).toBe("");
  });

  it("should handle a single input", () => {
    const classes = cn("class1");
    expect(classes).toBe("class1");
  });

  it("should handle an array of inputs", () => {
    const classes = cn(["class1", "class2", "class3"]);
    expect(classes).toBe("class1 class2 class3");
  });
});

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    const sampleString = "test";
    const transformedString = capitalize(sampleString);
    expect(transformedString).toBe("Test");
  });

  it("should do nothing to an empty string", () => {
    const sampleString = "";
    const transformedString = capitalize(sampleString);
    expect(transformedString).toBe("");
  });

  it("should do nothing to a string with a capital first letter already", () => {
    const sampleString = "Test";
    const transformedString = capitalize(sampleString);
    expect(transformedString).toBe("Test");
  });

  it("should do nothing to a numeric string", () => {
    const sampleString = "123";
    const transformedString = capitalize(sampleString);
    expect(transformedString).toBe("123");
  });

  it("should do nothing to a special character string", () => {
    const sampleString = "!@#";
    const transformedString = capitalize(sampleString);
    expect(transformedString).toBe("!@#");
  });
});

describe("tagColorMap", () => {
  it("should be non-empty", () => {
    expect(Object.keys(tagColorMap).length).toBeGreaterThan(0);
  });

  it("should ensure no value is an empty Array", () => {
    Object.values(tagColorMap).forEach((value) => {
      expect(value.length).toBeGreaterThan(0);
    });
  });
});

describe("handleLogoExceptions", () => {
  it("should take the first word of a multi-word name normally", () => {
    expect(handleLogoExceptions("test test")).toBe("test");
  });

  it("should do nothing to 'vs code' and 'guitar pro'", () => {
    expect(handleLogoExceptions("vs code")).toBe("vs code");
    expect(handleLogoExceptions("guitar pro")).toBe("guitar pro");
  });

  it("should expect 'spitfire labs' to be 'labs'", () => {
    expect(handleLogoExceptions("spitfire labs")).toBe("labs");
  });

  it("should return 'vst' for anything that includes that string", () => {
    expect(handleLogoExceptions("vst")).toBe("vst");
    expect(handleLogoExceptions("my vst")).toBe("vst");
    expect(handleLogoExceptions("testvst")).toBe("vst");
    expect(handleLogoExceptions("vsttest")).toBe("vst");
  });

  it("should return 'ik' if string includes 'modo' or 'amplitube'", () => {
    expect(handleLogoExceptions("modo")).toBe("ik");
    expect(handleLogoExceptions("test modo")).toBe("ik");
    expect(handleLogoExceptions("modo test")).toBe("ik");
    expect(handleLogoExceptions("amplitube")).toBe("ik");
    expect(handleLogoExceptions("test amplitube")).toBe("ik");
    expect(handleLogoExceptions("amplitube test")).toBe("ik");
  });

  it("should handle lowercasing", () => {
    expect(handleLogoExceptions("TEST")).toBe("test");
    expect(handleLogoExceptions("TEST TEST")).toBe("test");
    expect(handleLogoExceptions("SPITFIRE LABS")).toBe("labs");
    expect(handleLogoExceptions("VST")).toBe("vst");
    expect(handleLogoExceptions("MODO")).toBe("ik");
    expect(handleLogoExceptions("AMPLITUBE")).toBe("ik");
    expect(handleLogoExceptions("VS CODE")).toBe("vs code");
    expect(handleLogoExceptions("GUITAR PRO")).toBe("guitar pro");
  });
});

describe("getLogoSVG", () => {
  it("should return the Unknown SVG when not found", () => {
    const unknown = getLogoSVG("test");
    expect(unknown.props["aria-label"]).toBe("unknown svg");
  });

  it("should return a found svg if it's found", () => {
    const github = getLogoSVG("github");
    expect(github.props["aria-label"]).toBe("github svg");
  });

  it("should not have the wrong aria-label", () => {
    const unknown = getLogoSVG("test");
    expect(unknown.props["aria-label"]).not.toBe("github svg");
  });
});
