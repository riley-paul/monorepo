import { Button } from "./components/ui/button.tsx";
import { toast } from "sonner";

function App() {
  return (
    <main className="container2">
      <Button onClick={() => toast.success("World")}>Hello</Button>
    </main>
  );
}

export default App;
