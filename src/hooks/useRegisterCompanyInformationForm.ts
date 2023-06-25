import { useSelector } from "react-redux";
import { selectIsAdmin } from "../reducers/imagine-apps/imagine-app.selectors";
export function useRegisterStocktakingForm() {
  const isAdmin = useSelector(selectIsAdmin);
  const normaliseFileToBase64 = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e && e.fileList && e.fileList[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.fileList[0].originFileObj);
      reader.onload = () => {
        const base64Image = reader.result;
        e.fileList[0].base64Image = base64Image;
      };
    }
    return e?.fileList;
  };
  return {
    isAdmin,
    normaliseFileToBase64,
  };
}
