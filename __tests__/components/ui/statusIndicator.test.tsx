import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import StatusIndicator, { _getSizeClasses, _getStateColors } from "@/components/ui/status-indicator";

describe("StatusIndicator", () => {
  it("should render a status indicator", async () => {
    render(<StatusIndicator label="test" state="idle" />);
    const indicator = await screen.findByTestId("status indicator");
    expect(indicator).toBeInTheDocument();
  });
});

describe("_getStateColors", () => {
  it("should return the correct state colors given a state", () => {
    expect(_getStateColors("active")).toStrictEqual({ dot: "bg-green-500", ping: "bg-green-300" });
    expect(_getStateColors("down")).toStrictEqual({ dot: "bg-red-500", ping: "bg-red-300" });
    expect(_getStateColors("fixing")).toStrictEqual({ dot: "bg-yellow-500", ping: "bg-yellow-300" });
    expect(_getStateColors("idle")).toStrictEqual({ dot: "bg-slate-700", ping: "bg-slate-400" });
  });
});

describe("_getSizeClasses", () => {
  it("should return the correct size classes given a size", () => {
    expect(_getSizeClasses("sm")).toStrictEqual({ dot: "h-2 w-2", ping: "h-2 w-2" });
    expect(_getSizeClasses("lg")).toStrictEqual({ dot: "h-4 w-4", ping: "h-4 w-4" });
    expect(_getSizeClasses("md")).toStrictEqual({ dot: "h-3 w-3", ping: "h-3 w-3" });
  });
});
