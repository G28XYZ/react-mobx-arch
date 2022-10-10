import React, { FC } from "react";
import "./App.css";
import NoteForm from "../components/notes";
import Counter from "../components/counter";
import Auth from "../components/auth/Auth";
import Header from "../components/header";
import Random from "../components/random";

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
