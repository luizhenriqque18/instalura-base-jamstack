import Footer from "../src/components/commons/Footer";
import Menu from "../src/components/commons/Menu";
import { Text } from "../src/components/foundation/Text";
import { Button } from "../src/components/commons/Button";

export default function Home() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <Menu />
      <div>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign={{
            xs: "center",
            md: "left",
          }}
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          textAlign={{
            xs: "center",
            md: "left",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </Text>

        <Button
          variant="primary.main"
          margin={{
            xs: "auto",
            md: "initial",
          }}
          display="block"
        >
          Cadastrar
        </Button>
      </div>
      <Footer />
    </div>
  );
}
