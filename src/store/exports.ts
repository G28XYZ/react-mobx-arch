import { CounterViewModel } from "../components/counter/view/count-view-model";
import { AuthViewModel } from "../components/auth/view/auth-view-model";
import { NotesViewModel } from "../components/notes/view/notes-view-model";
import { LocaleStore } from "./locale-store";
import { RandomViewModel } from "../components/random/view/random-view-model";

import { AuthService } from "../components/auth/service/auth-service";

export const viewModels = { CounterViewModel, LocaleStore, AuthViewModel, NotesViewModel, RandomViewModel };
export const viewServices = { AuthService };
