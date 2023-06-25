import { doc, getFirestore } from "firebase/firestore";
import { useRegisterCompany } from "../hooks/useRegisterCompany";

// Tests that a company can be successfully registered with valid input values
it("test_successful_company_registration", async () => {
  const setDocMock = jest.fn();
  const formResetFieldsMock = jest.fn();
  const values = {
    name: "Test Company",
    address: "Test Address",
    nit: "123456789",
    phone: 1234567890,
  };
  const { onRegisterCompany, form } = useRegisterCompany();

  form.resetFields = formResetFieldsMock;

  await onRegisterCompany(values);

  expect(setDocMock).toHaveBeenCalledWith(
    doc(getFirestore(), "companies", values.nit),
    values
  );
  expect(formResetFieldsMock).toHaveBeenCalled();
});

// Tests that the form fields are reset after a successful company registration
it("test_form_fields_reset_after_successful_registration", async () => {
  const formResetFieldsMock = jest.fn();
  const values = {
    name: "Test Company",
    address: "Test Address",
    nit: "123456789",
    phone: 1234567890,
  };
  const { onRegisterCompany, form } = useRegisterCompany();
  form.resetFields = formResetFieldsMock;

  await onRegisterCompany(values);

  expect(formResetFieldsMock).toHaveBeenCalled();
});

// Tests that an error is thrown and isError is set to true when there is an error during company registration
it("test_error_thrown_and_is_error_set_when_registration_fails", async () => {
  const setDocMock = jest.fn(() => {
    throw new Error();
  });
  const setIsErrorMock = jest.fn();
  const values = {
    name: "Test Company",
    address: "Test Address",
    nit: "123456789",
    phone: 1234567890,
  };
  const { onRegisterCompany } = useRegisterCompany();

  await onRegisterCompany(values);

  expect(setDocMock).toHaveBeenCalledWith(
    doc(getFirestore(), "companies", values.nit),
    values
  );
  expect(setIsErrorMock).toHaveBeenCalledWith(true);
});

// Tests that isLoading is set to true when company registration is in progress
it("test_is_loading_set_to_true_during_registration", async () => {
  const setIsLoadingMock = jest.fn();
  const values = {
    name: "Test Company",
    address: "Test Address",
    nit: "123456789",
    phone: 1234567890,
  };
  const { onRegisterCompany } = useRegisterCompany();

  await onRegisterCompany(values);

  expect(setIsLoadingMock).toHaveBeenCalledWith(true);
});

// Tests that isLoading is set to false when company registration is complete
it("test_is_loading_set_to_false_after_registration", async () => {
  const setIsLoadingMock = jest.fn();
  const values = {
    name: "Test Company",
    address: "Test Address",
    nit: "123456789",
    phone: 1234567890,
  };
  const { onRegisterCompany } = useRegisterCompany();

  await onRegisterCompany(values);

  expect(setIsLoadingMock).toHaveBeenCalledWith(false);
});

// Tests that the NIT is used as the primary key for the company document
it("test_nit_used_as_primary_key_for_company_document", async () => {
  const setDocMock = jest.fn();
  const values = {
    name: "Test Company",
    address: "Test Address",
    nit: "123456789",
    phone: 1234567890,
  };
  const { onRegisterCompany } = useRegisterCompany();

  await onRegisterCompany(values);

  expect(setDocMock).toHaveBeenCalledWith(
    doc(getFirestore(), "companies", values.nit),
    values
  );
});
