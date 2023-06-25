import { useCompanyItem } from "../hooks/useCompanyItem";

// Tests that isEditing is false by default
it("test_isEditing_false", () => {
  const { isEditing } = useCompanyItem({
    company: {
      name: "Test Company",
      address: "Test Address",
      nit: "123456789",
      phone: 1234567890,
    },
  });
  expect(isEditing).toBe(false);
});

// Tests that onFormSubmit updates document and resets form fields
it("test_onFormSubmit_success", async () => {
  const updateDoc = jest.fn();
  const form = {
    resetFields: jest.fn(),
  };
  const { onFormSubmit } = useCompanyItem({
    company: {
      name: "Test Company",
      address: "Test Address",
      nit: "123456789",
      phone: 1234567890,
    },
  });
  await onFormSubmit({
    name: "New Test Company",
    address: "New Test Address",
    nit: "987654321",
    phone: 9876543210,
  });
  expect(updateDoc).toHaveBeenCalledWith(expect.anything(), {
    name: "New Test Company",
    address: "New Test Address",
    nit: "987654321",
    phone: 9876543210,
  });
  expect(form.resetFields).toHaveBeenCalled();
});

// Tests that onFormSubmit sets isError to true if updateDoc throws an error
it("test_onFormSubmit_error", async () => {
  const updateDoc = jest.fn(() => {
    throw new Error("Test Error");
  });
  const { onFormSubmit, isError } = useCompanyItem({
    company: {
      name: "Test Company",
      address: "Test Address",
      nit: "123456789",
      phone: 1234567890,
    },
  });
  await onFormSubmit({
    name: "New Test Company",
    address: "New Test Address",
    nit: "987654321",
    phone: 9876543210,
  });
  expect(updateDoc).toHaveBeenCalledWith(expect.anything(), {
    name: "New Test Company",
    address: "New Test Address",
    nit: "987654321",
    phone: 9876543210,
  });
  expect(isError).toBe(true);
});

// Tests that onDeleteDocument deletes document
it("test_onDeleteDocument_success", async () => {
  const deleteDoc = jest.fn();
  const { onDeleteDocument } = useCompanyItem({
    company: {
      name: "Test Company",
      address: "Test Address",
      nit: "123456789",
      phone: 1234567890,
    },
  });
  await onDeleteDocument();
  expect(deleteDoc).toHaveBeenCalledWith(expect.anything());
});

// Tests that onDeleteDocument sets isError to true if deleteDoc throws an error
it("test_onDeleteDocument_error", async () => {
  const deleteDoc = jest.fn(() => {
    throw new Error("Test Error");
  });
  const { onDeleteDocument, isError } = useCompanyItem({
    company: {
      name: "Test Company",
      address: "Test Address",
      nit: "123456789",
      phone: 1234567890,
    },
  });
  await onDeleteDocument();
  expect(deleteDoc).toHaveBeenCalledWith(expect.anything());
  expect(isError).toBe(true);
});

// Tests that isLoading is set to true before updateDoc or deleteDoc is called
it("test_isLoading_true", async () => {
  const { onFormSubmit, onDeleteDocument, isLoading } = useCompanyItem({
    company: {
      name: "Test Company",
      address: "Test Address",
      nit: "123456789",
      phone: 1234567890,
    },
  });
  await onFormSubmit({
    name: "New Test Company",
    address: "New Test Address",
    nit: "987654321",
    phone: 9876543210,
  });
  expect(isLoading).toBe(false);
  await onDeleteDocument();
  expect(isLoading).toBe(false);
});
