import { useStocktaking } from "../hooks/useStocktaking";

// Tests that useStocktaking initializes with empty stocktaking array, isLoading set to false, isRegistering set to false, and isError set to false
it("test_use_stocktaking_initialization", () => {
  const { stocktaking, isLoading, isError, isRegistering } = useStocktaking();

  expect(stocktaking).toEqual([]);
  expect(isLoading).toBe(false);
  expect(isError).toBe(false);
  expect(isRegistering).toBe(false);
});
