import React from "react";
import { Result } from "antd";

interface ErrorMessageProps {
  subTitle: string;
  statusCode: string;
}

const ErrorMessage = ({
  subTitle = "",
  statusCode = "403",
}: ErrorMessageProps) => (
  <Result status="error" title={statusCode} subTitle={subTitle} />
);

export default ErrorMessage;
