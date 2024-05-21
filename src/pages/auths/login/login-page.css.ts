import { style } from "@vanilla-extract/css";

export const mainClass = style({
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const formClass = style({
  width: 500,
});

export const createAccountClass = style({
  margin: "20px 0",
});

export const errorClass = style({
  color: "#ce7e7b",
});
