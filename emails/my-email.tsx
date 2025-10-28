import { Button, Html } from "@react-email/components";

export default function MyEmail() {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me, I'm a button
      </Button>
    </Html>
  );
}
