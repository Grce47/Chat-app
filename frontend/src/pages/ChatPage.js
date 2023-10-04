import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { useHistory } from "react-router";

const ChatPage = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <Button colorScheme="blue" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default ChatPage;
