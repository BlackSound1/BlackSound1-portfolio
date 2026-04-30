jest.mock("@vercel/speed-insights/next", () => ({
  SpeedInsights: () => null,
}));
