import React, { FC } from "react";
import "./App.css";
import { Auth, Header, NoteForm, Counter, Random } from "../components";

const App: FC = () => {
  return (
    <div className="page">
      <Header />
      <NoteForm />
      <Counter />
      <Auth />
      <Random />
    </div>
  );
};

export default React.memo(App);
