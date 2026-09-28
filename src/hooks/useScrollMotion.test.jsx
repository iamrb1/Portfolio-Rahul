import { render, act } from "@testing-library/react";
import useScrollMotion from "./useScrollMotion";
function Fixture() {
  useScrollMotion();
  return <div data-reveal>Content</div>;
}
test("scroll progress stays fixed between scroll events and reverses with position", () => {
  window.matchMedia = () => ({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
  let callback;
  jest.spyOn(window, "requestAnimationFrame").mockImplementation((fn) => {
    callback = fn;
    return 1;
  });
  jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
  let top = 650;
  jest
    .spyOn(HTMLElement.prototype, "getBoundingClientRect")
    .mockImplementation(function () {
      return {
        top:
          top + (1 - Number(this.style.getPropertyValue("--reveal") || 1)) * 22,
        height: 100,
      };
    });
  const { container } = render(<Fixture />);
  const el = container.firstChild;
  const start = Number(el.style.getPropertyValue("--reveal"));
  top = 500;
  act(() => {
    window.dispatchEvent(new Event("scroll"));
    callback();
  });
  expect(Number(el.style.getPropertyValue("--reveal"))).toBeGreaterThan(start);
  const held = el.style.cssText;
  expect(el.style.cssText).toBe(held);
  top = 650;
  act(() => {
    window.dispatchEvent(new Event("scroll"));
    callback();
  });
  expect(Number(el.style.getPropertyValue("--reveal"))).toBeCloseTo(start);
  jest.restoreAllMocks();
});
