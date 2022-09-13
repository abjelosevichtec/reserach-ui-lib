import { Container, VStack } from "@hope-ui/solid";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import TopProducts from "./components/TopProducts";
import TopCategories from "./components/TopCategories";

function App() {
  return (
    <div>
      <Header />
      <Container maxW="1277px" pt={100}>
        <VStack spacing={40}>
          <TopBanner />
          <TopProducts carouselId="products1" />
          <TopCategories />
          <TopProducts carouselId="products2" />
          <TopCategories />
        </VStack>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
