import "./App.css";
import { FormikForm } from "./components/FormikForm";
import { HookYupForm } from "./components/HookYupForm";
import { HookZodForm } from "./components/HookZodForm";

function App() {
  return (
    <>
      <HookZodForm />
      <FormikForm />
      <HookYupForm />
    </>
  );
}

export default App;
