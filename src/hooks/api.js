import { useState } from "react";

const RESULT1 = {
  suggestion: [
    {
      name: "red top",
      url: "https://www.google.com/",
    },
    {
      name: "top bra",
      url: "https://www.google.com/",
    },
    {
      name: "top long",
      url: "https://www.google.com/",
    },
    {
      name: "cotton top",
      url: "https://www.google.com/",
    },
  ],
  collection: [
    {
      _id: "638b6ea85812c02fe44935e4",
      title: "Tops",
      url: "https://www.google.com/",
    },
  ],
  product: [
    {
      _id: "638b6f35f6873d1a9beb250d",
      title: "Product 1",
      url: "https://www.google.com/",
      brand: "Gucci",
      price: "11.2",
      image:
        "https://thuvienmuasam.com/uploads/default/original/2X/8/8e6fdc381689f221bbef39e2491c452efffe1e11.jpeg",
    },
    {
      _id: "638b6f3553bc3b000b0669fc",
      title: "Product 2",
      url: "https://www.google.com/",
      brand: "Convert",
      price: "66.2",
      image:
        "https://bucket.nhanh.vn/store2/61032/ps/20210623/3f76282bdf85733db0f0a9776c7c4afe.jpg",
    },
    {
      _id: "638b6f3508b9bd4d71122b63",
      title: "Product 3",
      url: "https://www.google.com/",
      brand: "Gucci",
      price: "33.5",
      image:
        "https://www.thoitrangtichtac.com/productimg/24000/23081/34_Chan_vay_chu_a_mau_den_6_nut_co_tui_c3081.jpg",
    },
  ],
};

const RESULT2 = {
  suggestion: [
    {
      name: "cotton top",
      url: "https://www.google.com/",
    },
    {
      name: "top sportwear",
      url: "https://www.google.com/",
    },
    {
      name: "red long",
      url: "https://www.google.com/",
    },
    {
      name: "green top",
      url: "https://www.google.com/",
    },
  ],
  collection: [
    {
      _id: "638b6ea85812c02fe44935e4",
      title: "Tops",
      url: "https://www.google.com/",
    },
  ],
  product: [
    {
      _id: "638b6f35f6873d1a9beb250d",
      title: "Product 3",
      url: "https://www.google.com/",
      brand: "Convert",
      price: "19.3",
      image:
        "https://vicovn.s3.ap-southeast-1.amazonaws.com/images/2018/12/10/131888824140969923.jpg",
    },
    {
      _id: "638b6f3553bc3b000b0669fc",
      title: "Product 4",
      url: "https://www.google.com/",
      brand: "Gucci",
      price: "3.2",
      image:
        "https://shamdi.com/wp-content/uploads/2022/04/ao-tank-nu-the-thao-shamdi-4.jpg",
    },
    {
      _id: "638b6f3508b9bd4d71122b63",
      title: "Product 6",
      url: "https://www.google.com/",
      brand: "Convert",
      price: "253.5",
      image:
        "https://www.thoitrangtichtac.com/productimgs/B/B6X/B69/b6934/Ao_so_mi_nu_cong_so_phoi_nut_mau_do_b6934_4.jpg",
    },
  ],
};

const useSearch = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const doSearch = (search = "") => {
    setData();
    setLoading(true);
    setTimeout(() => {
      if (search.toLowerCase() === "t") {
        setData(RESULT1);
      } else if (search.toLowerCase() === "to") {
        setData(RESULT2);
      } else {
        setData(RESULT1);
      }
      setLoading(false);
    }, 500);
  };

  return [doSearch, data, loading];
};

export { useSearch };
