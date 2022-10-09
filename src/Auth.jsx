import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { useStore } from "./NotesContext";

export const Auth = observer(() => {
  const authStore = useStore().get("auth");
  const callbacks = {
    onSubmit: useCallback((e) => {
      e.preventDefault();
      authStore.auth();
    }, []),
    onChange: useCallback((e) => authStore.setForm(e.target.name, e.target.value), []),
    onCancelChange: useCallback(() => authStore.clearForm(), []),
  };

  return (
    <div style={{ maxWidth: 320 }}>
      <form onSubmit={callbacks.onSubmit} style={{ display: "flex", flexDirection: "column", margin: "inherit", gap: 10 }}>
        <input name="email" onChange={callbacks.onChange} value={authStore.email} />
        <input name="password" onChange={callbacks.onChange} value={authStore.password} />
        <button type="submit">send</button>
      </form>
      <button onClick={callbacks.onCancelChange}>cancel</button>
      <div style={{ maxWidth: 320, width: "100%" }}>token - {authStore.token}</div>
    </div>
  );
});
