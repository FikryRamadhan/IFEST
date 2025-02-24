import Hero from "../sections/home/Hero"
import Card from "../component/Card"
import ShopCategory from "../component/ShopCategory"

const Home = () => {
  return (
    <>
        <Hero />
        <ShopCategory 
        categories={["All", "T-Shirt", "Shirt", "Pants", "Jacket"]}
        />
        <Card 
        name={"Cotton T-Shirt v-neck"}
        description={"easy, fit with a v-neck"}
        images={["/card.jpg", "/card1.jpg"]}
        hoverImages={["/hoverImage.jpg", "/hoverImage1.jpg"]}
        price={100000}
        colors={["bg-teal-500", "bg-red-500"]}
        />
    </>
  )
}

export default Home;