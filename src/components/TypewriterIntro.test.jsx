import { act, render } from "@testing-library/react";
import TypewriterIntro from "./TypewriterIntro";

let intersect, hidden, reduce, motion;
beforeEach(() => {
  jest.useFakeTimers();
  hidden = false;
  reduce = false;
  Object.defineProperty(document, "hidden", {
    configurable: true,
    get: () => hidden,
  });
  window.matchMedia = () => ({
    get matches() {
      return reduce;
    },
    addEventListener: (_, fn) => {
      motion = fn;
    },
    removeEventListener: jest.fn(),
  });
  global.IntersectionObserver = class {
    constructor(fn) {
      intersect = fn;
    }
    observe() {}
    disconnect() {}
  };
});
afterEach(() => {
  jest.useRealTimers();
});
test("typing pauses offscreen and in hidden tabs, and resumes when visible", () => {
  const { container, unmount } = render(<TypewriterIntro />);
  const value = () => container.querySelector(".typewriter-text").textContent;
  expect(jest.getTimerCount()).toBe(0);
  act(() => intersect([{ isIntersecting: true }]));
  act(() => jest.advanceTimersByTime(70));
  expect(value()).toBe("P|");
  act(() => intersect([{ isIntersecting: false }]));
  expect(jest.getTimerCount()).toBe(0);
  act(() => jest.advanceTimersByTime(5000));
  expect(value()).toBe("P|");
  act(() => intersect([{ isIntersecting: true }]));
  act(() => {
    hidden = true;
    document.dispatchEvent(new Event("visibilitychange"));
  });
  expect(jest.getTimerCount()).toBe(0);
  act(() => {
    hidden = false;
    document.dispatchEvent(new Event("visibilitychange"));
  });
  act(() => jest.advanceTimersByTime(70));
  expect(value()).toBe("Pr|");
  unmount();
  expect(jest.getTimerCount()).toBe(0);
});
test("reduced motion shows the complete role without scheduling a timer", () => {
  const { container } = render(<TypewriterIntro />);
  act(() => {
    intersect([{ isIntersecting: true }]);
    reduce = true;
    motion();
  });
  expect(container.querySelector(".typewriter-text").textContent).toBe(
    "Product Manager|",
  );
  expect(jest.getTimerCount()).toBe(0);
});
