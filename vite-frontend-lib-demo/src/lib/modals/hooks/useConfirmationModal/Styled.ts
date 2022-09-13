import { styled } from '@stitches/react';

export const Wrapper = styled("div", {
  fontFamily: "'Nunito Sans', sans-serif"
})

export const ContentWrapper = styled("div", {
  padding: "0 77px 24px 77px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: "24px"
})

export const Title = styled("span", {
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "130%",
  textAlign: "center",
  color: "#14181c"
})

export const ButtonsWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "16px"
})