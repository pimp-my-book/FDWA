import React from "react";
import { Alert } from "react-bootstrap";

const alertComponent = ({variant, title, text}) => {
  return (
    <Alert dismissible variant = { variant }>
      <Alert.Heading>{ title }</Alert.Heading>
        { text }
    </Alert>
  );
};

export default alertComponent;
