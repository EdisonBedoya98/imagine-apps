import { useListCompanies } from "../hooks/useListCompanies";

// Tests that isLoading is initially false, isError is initially false, and collectionData is initially an empty array
it("test_initial_state", () => {
  const { collectionData, isLoading, isError } = useListCompanies();
  expect(collectionData).toEqual([]);
  expect(isLoading).toBe(false);
  expect(isError).toBe(false);
});

// Tests that getCompaniesFromDB is called on mount
it("test_get_companies_from_db", () => {
  const getCompaniesFromDB = jest.fn();
  jest.mock("../models/interfaces/ImagineApps", () => ({
    getCompaniesFromDB,
  }));
  useListCompanies();
  expect(getCompaniesFromDB).toHaveBeenCalled();
});

// Tests that isLoading is set to true when getCompaniesFromDB is called and set to false when finished
it("test_loading_state", async () => {
  const { isLoading } = useListCompanies();
  expect(isLoading).toBe(true);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(isLoading).toBe(false);
});

// Tests that isError is set to true and collectionData is an empty array when there is an error
it("test_error_state", async () => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.mock("firebase/firestore", () => ({
    collection: jest.fn(() => {
      throw new Error();
    }),
    getDocs: jest.fn(),
    getFirestore: jest.fn(),
  }));
  const { isError, collectionData } = useListCompanies();
  expect(isError).toBe(true);
  expect(collectionData).toEqual([]);
});

// Tests that collectionData is an empty array when there is no data
it("test_no_data", async () => {
  jest.mock("firebase/firestore", () => ({
    collection: jest.fn(),
    getDocs: jest.fn(() => ({
      docs: [],
    })),
    getFirestore: jest.fn(),
  }));
  const { collectionData } = useListCompanies();
  expect(collectionData).toEqual([]);
});

// Tests that collectionData is set to CompanyInformation array when there is data
it("test_data", async () => {
  const data = [
    {
      name: "Company 1",
      address: "Address 1",
      nit: "123456789",
      phone: 1234567890,
    },
  ];
  jest.mock("firebase/firestore", () => ({
    collection: jest.fn(),
    getDocs: jest.fn(() => ({
      docs: [{ data: () => data[0] }],
    })),
    getFirestore: jest.fn(),
  }));
  const { collectionData } = useListCompanies();
  expect(collectionData).toEqual(data);
});
