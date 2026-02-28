interface HeadingProps {
  level: number;
  text: string;
}

/**
 * Creates a styled `<h#>` heading with the given text.
 * @param level the numeric level of the heading.
 * @param text The text to put in the heading.
 * @returns A styled `<h#>` element with the given text.
 */
export default function Heading({ level, text }: HeadingProps) {
  switch (level) {
    case 1:
      return (
        <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent transition-colors duration-200">
          {text}
        </h1>
      );
    case 2:
      return (
        <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent transition-colors duration-200">
          {text}
        </h2>
      );
  }
}
