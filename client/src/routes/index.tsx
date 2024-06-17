import { Button } from "@/components/ui/button.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

const component: React.FC = () => {
  return (
    <main className="container2">
      <Button onClick={() => toast.success("World")}>Hello</Button>
    </main>
  );
};

export const Route = createFileRoute("/")({
  component,
});
