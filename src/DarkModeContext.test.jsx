import { act, fireEvent, render, screen } from "@testing-library/react";
import { DarkModeProvider, useDarkMode } from "./DarkModeContext";
function Control() {
  const { dark, toggle } = useDarkMode();
  return <button onClick={toggle}>{dark ? "dark" : "light"}</button>;
}
beforeEach(() => {
  localStorage.clear();
  document.documentElement.className = "";
  window.matchMedia = () => ({ matches: false });
  delete document.startViewTransition;
});
test("theme switches and persists without view transition support", () => {
  jest.useFakeTimers();
  render(
    <DarkModeProvider>
      <Control />
    </DarkModeProvider>,
  );
  fireEvent.click(screen.getByRole("button"));
  expect(document.documentElement.classList.contains("dark")).toBe(true);
  expect(localStorage.getItem("darkMode")).toBe("true");
  act(() => jest.advanceTimersByTime(260));
  expect(document.documentElement.classList.contains("theme-fade")).toBe(false);
  fireEvent.click(screen.getByRole("button"));
  expect(document.documentElement.classList.contains("dark")).toBe(false);
  act(() => jest.advanceTimersByTime(260));
  jest.useRealTimers();
});
test("reduced motion switches immediately without a transition", () => {
  localStorage.setItem("darkMode", "false");
  window.matchMedia = () => ({ matches: true });
  document.startViewTransition = jest.fn();
  render(
    <DarkModeProvider>
      <Control />
    </DarkModeProvider>,
  );
  fireEvent.click(screen.getByRole("button"));
  expect(document.startViewTransition).not.toHaveBeenCalled();
  expect(document.documentElement.classList.contains("dark")).toBe(true);
});
test("snapshot transition applies the new theme and cleans up", async () => {
  let finish;
  document.startViewTransition = jest.fn((update) => {
    update();
    return {
      ready: Promise.resolve(),
      finished: new Promise((resolve) => {
        finish = resolve;
      }),
    };
  });
  render(
    <DarkModeProvider>
      <Control />
    </DarkModeProvider>,
  );
  fireEvent.click(screen.getByRole("button"));
  expect(document.documentElement.dataset.themeTurn).toBe("dark");
  expect(screen.getByRole("button").textContent).toBe("dark");
  await act(async () => finish());
  expect(document.documentElement.dataset.themeTurn).toBeUndefined();
});
