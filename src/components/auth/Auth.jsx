import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { useStore } from "../../hooks/use-store";
import useTranslate from "../../hooks/use-translate";
import Spinner from "../spinner/Spinner";

export const Auth = observer(() => {
  const authStore = useStore().get("auth");
  const lang = useTranslate().lang();
  const callbacks = {
    onSubmit: useCallback((e) => {
      e.preventDefault();
      authStore.auth();
    }, []),
    onChange: useCallback((e) => authStore.setForm(e.target.name, e.target.value), []),
    onCancelChange: useCallback(() => authStore.clearForm(), []),
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <Spinner active={authStore.waiting}>
        <h3>{lang.auth.title}</h3>
        <form
          onSubmit={callbacks.onSubmit}
          style={{ display: "flex", flexDirection: "column", margin: "inherit", gap: 10 }}
        >
          <input
            placeholder={lang.auth.placeholder.email + "alex@alex.ru"}
            name="email"
            onChange={callbacks.onChange}
            value={authStore.email}
          />
          <input
            placeholder={lang.auth.placeholder.password + "111"}
            name="password"
            onChange={callbacks.onChange}
            value={authStore.password}
          />
          <button type="submit">{lang.auth.buttons.send}</button>
        </form>
        <button onClick={callbacks.onCancelChange}>{lang.auth.buttons.cancel}</button>
        <div
          style={{
            width: "100%",
            color: authStore.token && authStore.token !== "Error" && "green",
            wordWrap: "break-word",
          }}
        >
          {authStore.token && authStore.token !== "Error" && "✔️"} token - {authStore.token}
        </div>
      </Spinner>
    </div>
  );
});
