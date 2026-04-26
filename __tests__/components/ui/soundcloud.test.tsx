import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SoundcloudEmbed from "@/components/ui/soundcloudEmbed";

describe("SoundCloudEmbed", () => {
  it("renders a Soundcloud embed", async () => {
    render(<SoundcloudEmbed embedURL="test" />);

    const iframe = await screen.findByTestId("soundcloud-iframe");

    expect(iframe).toBeInTheDocument();

    expect(iframe).toHaveAttribute("src", "test");
    expect(iframe).toHaveAttribute("width", "100%");
  });
});
