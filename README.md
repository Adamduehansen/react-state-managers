# React State Management Showcase
This is a repository where I try out different state managers for React with the purpose of getting to know them. Each showcase is build around a todo application which these features:

  1. Adding a todo
  2. Deleting a todo
  3. Toggle a todo completed or incompleted
  4. Filter completed todos.
  5. Load todos from storage.

## Supported state managers 📝
✅ Redux

A solid choice for application state, though getting started might seem combersome when setting up reducers. Another gotcha is that the component that renders the `Provider` component for the store cannot use `useDispatch` and `useSelector` hooks. In the case of this project the `Provider` component is added in main.tsx.

Writing tests for reducers is easy which is nice.

❌ Zustand

❌ Jotai

❌ XState

❌ MobX

❌ Valtio

❌ Recoil
