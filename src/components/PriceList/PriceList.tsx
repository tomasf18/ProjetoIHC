interface Service {
    name: string;
    price: number;
    id: number;
  }
  
  interface ServiceCategory {
    [key: string]: Service[];
  }
  
  const priceByServiceType: { Man: ServiceCategory; Woman: ServiceCategory } = {
    Man: {
      Hair: [
        { name: "Mullet", price: 20, id: 1 },
        { name: "Fade", price: 25, id: 2 },
        { name: "Undercut", price: 30, id: 3 },
        { name: "Buzz Cut", price: 15, id: 4 },
        { name: "Quiff", price: 25, id: 5 },
        { name: "Pompadour", price: 30, id: 6 },
      ],
      Beard: [
        { name: "Simple Beard", price: 15, id: 1 },
        { name: "Full Beard", price: 20, id: 2 },
        { name: "Designer Beard", price: 25, id: 3 },
        { name: "Fade Beard", price: 30, id: 4 },
      ],
      Eyebrows: [
        { name: "Eyebrow Design", price: 10, id: 1 },
        { name: "Eyebrow Tinting", price: 15, id: 2 },
        { name: "Eyelash Extensions", price: 20, id: 3 },
        { name: "Eyelash Perm", price: 25, id: 4 },
      ],
      Skin: [
        { name: "Skin Cleaning", price: 35, id: 1 },
        { name: "Acne Treatment", price: 40, id: 2 },
        { name: "Wrinkle Treatment", price: 45, id: 3 },
        { name: "Spot Treatment", price: 50, id: 4 },
      ],
    },
    Woman: {
      Hair: [
        { name: "Haircut", price: 30, id: 1 },
        { name: "Coloring", price: 40, id: 2 },
        { name: "Highlights", price: 45, id: 3 },
        { name: "Perm", price: 50, id: 4 },
        { name: "Hair Treatment", price: 30, id: 5 },
        { name: "Brushing", price: 20, id: 6 },
        { name: "Extensions", price: 60, id: 7 },
        { name: "Straightening", price: 50, id: 8 },
      ],
      Eyebrows: [
        { name: "Eyebrow Design", price: 10, id: 1 },
        { name: "Eyebrow Tinting", price: 15, id: 2 },
        { name: "Eyelash Extensions", price: 20, id: 3 },
        { name: "Eyelash Perm", price: 25, id: 4 },
      ],
      Skin: [
        { name: "Skin Cleaning", price: 35, id: 1 },
        { name: "Acne Treatment", price: 40, id: 2 },
        { name: "Wrinkle Treatment", price: 45, id: 3 },
        { name: "Spot Treatment", price: 50, id: 4 },
      ],
      Relaxation: [
        { name: "Relaxing Massage", price: 45, id: 1 },
        { name: "Facial Treatment", price: 50, id: 2 },
        { name: "Body Treatment", price: 55, id: 3 },
        { name: "Spa", price: 60, id: 4 },
      ],
      Manicure: [
        { name: "Simple Manicure", price: 15, id: 1 },
        { name: "French Manicure", price: 20, id: 2 },
        { name: "Gel Manicure", price: 25, id: 3 },
        { name: "Spa Manicure", price: 30, id: 4 },
      ],
      Pedicure: [
        { name: "Simple Pedicure", price: 20, id: 1 },
        { name: "French Pedicure", price: 25, id: 2 },
        { name: "Gel Pedicure", price: 30, id: 3 },
        { name: "Foot Spa", price: 30, id: 4 },
      ],
    },
  };
  
  const PriceItem: React.FC<Service> = ({ name, price }) => {
    return (
      <div className="flex justify-between px-4 py-2 border-b">
        <span>{name}</span>
        <span>{price} €</span>
      </div>
    );
  };
  
  const CategoryTitle: React.FC<{ title: string }> = ({ title }) => {
    return <h4 className="text-lg font-semibold mb-2">{title}</h4>;
  };
  
  const PriceCategory: React.FC<{ category: string; services: Service[] }> = ({ category, services }) => {
    return (
      <div className="p-4">
        <CategoryTitle title={category} />
        {services.map((service) => (
          <PriceItem {...service} key={service.id} />
        ))}
      </div>
    );
  };
  
  const PriceList: React.FC = () => {
    return (
      <div className="p-8">
        <div className="flex flex-col md:flex-row">
          {/* Men Prices */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">For Men</h3>
            {Object.keys(priceByServiceType.Man).map((category) => (
              <PriceCategory key={category} category={category} services={priceByServiceType.Man[category]} />
            ))}
          </div>
          {/* Woman Prices */}
          <div className="w-full md:w-1/2 pl-0 md:pl-4">
            <h3 className="text-2xl font-semibold mb-4">For Women</h3>
            {Object.keys(priceByServiceType.Woman).map((category) => (
              <PriceCategory key={category} category={category} services={priceByServiceType.Woman[category]} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PriceList;