import { Box, Section } from '@radix-ui/themes'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
    <Box
        asChild
        width="64px" height="64px"
    >
      <Section size="2">123</Section>
    </Box>
    </main>
  );
}
