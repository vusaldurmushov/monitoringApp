import { Button } from "./components/ui/button";
import { AlertDialogDemo } from "./Test";

function App() {
  return (
    <>
      <Button
        variant="outline"
        className="text-blue-500 border-blue-500 hover:!bg-blue-100"
      >
        Button
      </Button>
      <div className="text-blue-500 border border-blue-500 hover:bg-blue-100">
        Test Divx
      </div>

      <AlertDialogDemo />
    </>
  );
}

export default App;
