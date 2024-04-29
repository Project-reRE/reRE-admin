import { Typography } from "@mui/material";
import styled from "styled-components";

const UserPage = () => {
  return (
    <SWrapper>
      <Typography variant="h5">유저 관리</Typography>
    </SWrapper>
  );
};

export default UserPage;

const SWrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
`;
