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

✅ Zustand

Setting up Zustand is an improvement from Redux, and the `use[...]Store` hook can be set and updated in the same component. The syntax inside the store decleration is a little strange in my opinion:
- the `create` function needs to be curried with `()(...)`, though it is a workaround for some TypeScript issue.
- the need for using `set` inside the functions leads to alot of indentions, and moving functions out of `create` does not look good with typings.

Zustand does not seem to have matured to write tests. I did not find a way to test the result of `useTodoStore`, and neither the documentation or searches on the web helped.

❌ Jotai

❌ XState

❌ MobX

❌ Valtio

❌ Recoil
