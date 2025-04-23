import { plants, tent } from "../../assets/images";

export const forSectionData = [
  {
    headerText: "For Farmers",
    bodyText:
      "Enjoy convenient and affordable farm to market delivery with us.",
    listValues: [
      "Easy to book and schedule trucks",
      "Save more with our competitive pricing",
      "Accurately predict the duration of delivery",
      "Book a free consultation to know which of our packages is best for you.",
    ],
    buttonText: "Book a Truck",
    imageUrl: plants,
    reverse: false,
  },
  {
    headerText: "For Middlemen and Exporters",
    bodyText:
      "You can enjoy convenient storage and transportation deals tailored specifically to you with us",
    listValues: [
      "Access to strategic warehousing",
      "Enjoy a sustainable partnership that supports your growth and business",
      "Easy to book and schedule trucks",
      "Accurately predict the duration of delivery",
      "Book a free consultation to figure out which of our packages work best for you.",
    ],
    buttonText: "Become a driver",
    imageUrl: tent,
    reverse: true,
  },
];
