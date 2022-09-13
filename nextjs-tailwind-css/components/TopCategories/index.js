import Card from "./components/Card";

function TopCategories() {
  return (
    <div className="grid items-center grid-cols-2">
      <h1 className="text-4xl">Popularne kategorije</h1>
      <a href="#" className="flex justify-end text-blue-600 no-underline">
        Vidi sve kategorije
      </a>
      <div className="grid grid-cols-4 col-span-2 gap-6 mt-4">
        <Card
          title="Maske za telefone"
          imageSrc="https://images.unsplash.com/photo-1662326430211-12dd12b4320b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Card
          title="Kisobrani i kabanice"
          imageSrc="https://images.unsplash.com/photo-1662333348559-9818e4b154e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        />
        <Card
          title="Luksuzni brendovi na popustu"
          imageSrc="https://images.unsplash.com/photo-1662330286867-8cb2a4d7633d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        />
        <Card
          title="Hop Hop Shop"
          imageSrc="https://images.unsplash.com/photo-1662329219657-ad19333b0c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        />
        <Card
          title="INTEX - bazeni i dodatna oprema"
          imageSrc="https://images.unsplash.com/photo-1662321791202-f7b0a54f9121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Card
          title="Nega kose"
          imageSrc="https://images.unsplash.com/photo-1662328726445-420b076334ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Card
          title="Parfemi"
          imageSrc="https://images.unsplash.com/photo-1662314964544-7d75abce9ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Card
          title="Pet shop"
          imageSrc="https://images.unsplash.com/photo-1662323510625-1b2912f71688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
      </div>
    </div>
  );
}

export default TopCategories;
