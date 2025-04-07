import { useSpring, animated } from "@react-spring/web";

function Counter({ number }) {
  const [animatedNumber] = useSpring(() => ({
    from: { val: 0 },
    val: number,
    config: { mass: 1, tension: 100, friction: 30 },
  }));

  return (
    <div className="counter" style={{ fontSize: "4rem" }}>
      <animated.span>
        {animatedNumber.val.to((val) => Math.floor(val))}
      </animated.span>
    </div>
  );
}

export default Counter;
