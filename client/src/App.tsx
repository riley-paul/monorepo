import { Button } from "./components/ui/button.tsx";
import { toast } from "sonner";

function App() {
  return <Button onClick={() => toast.success("World")}>Hello</Button>;
}

export default App;
