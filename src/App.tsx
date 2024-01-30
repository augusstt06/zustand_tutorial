import { useCountStore } from "./store";
import { shallow } from "zustand/shallow";

function App() {
  // 구조 분해 할당
  // 스토어 내부의 값이 업데이트 되면 해당 store를 구독하고 있는 모든 컴포넌트가 리렌더링 => 성능 약화
  // const { count, increaseCount, decreaseCount } = useCountStore();

  // selector 함수
  // 선택적으로 상태를 가져올수 있어 불필요한 렌더링 최소화
  // const count = useCountStore((state) => state.count);
  // const increaseCount = useCountStore((state) => state.increaseCount);
  // const decreaseCount = useCountStore((state) => state.decreaseCount);

  const { count, increaseCount, decreaseCount } = useCountStore(
    (state) => ({
      count: state.count,
      increaseCount: state.increaseCount,
      decreaseCount: state.decreaseCount,
    }),
    shallow
  );

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
