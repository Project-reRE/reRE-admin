import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constant/paths";

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard = (props: GuestGuardProps) => {
  const navigate = useNavigate();
  const isCustomLogin = localStorage.getItem("isCustomLogin") === "true";

  if (isCustomLogin) {
    navigate(PATH.USER);
    return <></>;
  }

  return props?.children;
};

export default GuestGuard;
