import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

describe("Card", () => {
  it("should render an empty card", async () => {
    render(<Card />);
    const card = await screen.findByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("should render an empty card header", async () => {
    render(<CardHeader />);
    const header = await screen.findByTestId("card header");
    expect(header).toBeInTheDocument();
  });

  it("should render an empty card title", async () => {
    render(<CardTitle />);
    const title = await screen.findByTestId("card title");
    expect(title).toBeInTheDocument();
  });

  it("should render an empty card description", async () => {
    render(<CardDescription />);
    const desc = await screen.findByTestId("card description");
    expect(desc).toBeInTheDocument();
  });

  it("should render an empty card action", async () => {
    render(<CardAction />);
    const action = await screen.findByTestId("card action");
    expect(action).toBeInTheDocument();
  });

  it("should render an empty card content", async () => {
    render(<CardContent />);
    const content = await screen.findByTestId("card content");
    expect(content).toBeInTheDocument();
  });

  it("should render an empty card footer", async () => {
    render(<CardFooter />);
    const footer = await screen.findByTestId("card footer");
    expect(footer).toBeInTheDocument();
  });

  it("should render a full card", async () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardAction>Card Action</CardAction>
          <CardDescription>Card Description</CardDescription>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    );

    const card = await screen.findByTestId("card");
    expect(card).toBeInTheDocument();
    const header = await screen.findByTestId("card header");
    expect(header).toBeInTheDocument();
    const title = await screen.findByTestId("card title");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe("Card Title");
    const desc = await screen.findByTestId("card description");
    expect(desc).toBeInTheDocument();
    expect(desc.textContent).toBe("Card Description");
    const action = await screen.findByTestId("card action");
    expect(action).toBeInTheDocument();
    expect(action.textContent).toBe("Card Action");
    const content = await screen.findByTestId("card content");
    expect(content).toBeInTheDocument();
    const footer = await screen.findByTestId("card footer");
    expect(footer).toBeInTheDocument();
    expect(footer.textContent).toBe("Card Footer");
  });
});
