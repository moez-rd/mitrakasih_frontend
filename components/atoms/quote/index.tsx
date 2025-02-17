import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Quote(props: Props) {
  const { children } = props;

  return <p className="text-primary-800 text-3xl py-16">{children}</p>;
}
