import "./App.css";
import { NewNoteForm } from "../components/notes/NewNoteForm";
import { useStore } from "../hooks/use-store";
import { observer } from "mobx-react-lite";
import Counter from "../components/counter/Counter";
import { Auth } from "../components/auth/Auth";
import Header from "../components/header/Header";
import Random from "../components/random/Random";

const App = observer(() => {
  const notesStore = useStore().get("notes");

  return (
    <div className="page">
      <Header />
      <NewNoteForm />
      <Counter />
      <Auth />
      <Random />
    </div>
  );
});

export default App;
