import "./globals.css";

export const metadata = {
  title: "TaskFlow | Make progress visible",
  description: "A calmer workspace for projects, priorities, and the next task.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
