## Zustand Tutorial

> [Zustand 공식문서](https://docs.pmnd.rs/zustand/getting-started/introduction) 를 참고하여 기본적인 사용법과 개념을 공부한 레포지토리입니다.

### Project Setup

- React (vite js)
- Zustand

```zsh
pnpm create vite@latest

pnpm install
```

### Zustand

- install

  ```zsh
  pnpm install zustand
  ```

- Store 생성

  src/store/index.ts

  ```typescript
  import { create } from "zustand";

  type CountState = {
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
  };

  export const useCountStore = create<CountState>((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  }));
  ```

  redux와 비슷하게 store에서 상태를 관리하는 selector 함수 작성

  - 리덕스와 다르게 Provider가 필요없다!

- Selector 함수 사용하기

  ```typescript
  import { useCountStore } from "./store";

  function App() {
    const { count, increaseCount, decreaseCount } = useCountStore();

    return (
      <div>
        <a>현재 카운트 : {count}</a>
        <br />
        <button onClick={increaseCount}>+</button>
        <br />
        <button onClick={decreaseCount}>-</button>
      </div>
    );
  }

  export default App;
  ```

  - 선언한 Selector 함수를 불러와서 사용만 하면 된다.

- 기본적인 보일러 플레이트는 리덕스와 유사하나 절대적인 코드의 양이 확연히 적다...!
- Provider로 앱을 wrapping 하지 않기 때문에 불필요한 rerendering을 최소화 할수 있다.
