import { memo, useRef } from "react";

interface Props {
  onClick: () => void;
}

export const MyExpensiveComponent = memo(({ onClick }: Props) => {
  const ref = useRef(0);
  ref.current++;
  return (
    <div>
      <div>Renders: {ref.current}</div>
      <button onClick={onClick}>Button</button>
    </div>
  );
});
