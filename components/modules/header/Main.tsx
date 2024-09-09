import Container from "@/components/custom/Container";
import Logo from "@/components/custom/Logo";
import MobileBottom from "@/components/custom/MobileBottom";
import Row from "@/components/custom/Row";
import React from "react";
import MainMenu from "./MainMenu";
import IconsGroups from "./IconsGroups";

export default function Main() {
  return (
    <section className="h-full">
      <Container>
        <Row className="justify-between">
          <MobileBottom />
          <Logo />
          <MainMenu />
          <IconsGroups />
        </Row>
      </Container>
    </section>
  );
}
