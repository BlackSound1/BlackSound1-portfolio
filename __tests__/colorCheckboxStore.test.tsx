import "@testing-library/jest-dom";

import { CheckBoxStore } from "@/stores/colorCheckboxStore";

describe("CheckBoxStore", () => {
  let unsubscribe: () => void;

  beforeEach(() => {
    jest.clearAllMocks();
    unsubscribe = CheckBoxStore.subscribe(() => {});
  });

  afterEach(() => {
    unsubscribe();
  });

  it("should add the callback function to the listeners set", () => {
    expect(unsubscribe).toBeDefined();
    expect(unsubscribe).toBeInstanceOf(Function);
    expect(typeof unsubscribe).toBe("function");
  });

  it("should start off false", () => {
    expect(CheckBoxStore.getIsChecked()).toBeFalsy();
  });

  it("should toggle the stores state", () => {
    CheckBoxStore.toggleIsChecked();
    expect(CheckBoxStore.getIsChecked()).toBeTruthy();
    CheckBoxStore.toggleIsChecked();
    expect(CheckBoxStore.getIsChecked()).toBeFalsy();
  });

  it("should trigger all registered listeners", () => {
    const mockListener = jest.fn();
    CheckBoxStore.subscribe(mockListener);

    CheckBoxStore.toggleIsChecked();
    expect(mockListener).toHaveBeenCalled();

    CheckBoxStore.toggleIsChecked();
    expect(mockListener).toHaveBeenCalledTimes(2);
  });
});
