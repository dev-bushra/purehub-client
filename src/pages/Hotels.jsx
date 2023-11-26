import { useState } from "react";
import { bed, holes, maldivs, mongolia, morocco, wall } from "../assets/images"
import { PlacesCard } from "../container"
import { useEffect } from "react";


const Hotels = () => {
  const [marketData, setMarketData] = useState(null);
  const data = [
      {
        id: 37,
        name: "ثامر للسفر والسياحة",
        name_ar: "ثامر للسفر والسياحة",
        description: "<p>2111111111111<br></p>",
        description_ar: null,
        address: "الملز",
        latitude: "24.63972404378092",
        longitude: "46.7234235641395",
        phone: "09876543",
        mobile: "098765432",
        price: 1,
        discount_price: 1,
        package_items_count: 1,
        category_id: 20,
        information: "<p>123456<br></p>",
        admin_commission: 30,
        delivery_fee: null,
        delivery_range: null,
        default_tax: null,
        closed: false,
        active: true,
        available_for_delivery: false,
        created_at: "2023-11-06 05:02:55",
        updated_at: "2023-11-08 10:22:45",
        custom_fields: [],
        has_media: true,
        rate: null,
        media: [
          {
            id: 1009,
            model_type: "App\\Models\\Market",
          model_id: 37,
            collection_name: "image",
            name: "IMG_0059",
            file_name: "IMG_0059.jpg",
            mime_type: "image/jpeg",
            disk: "public",
            size: 187660,
            manipulations: [],
            custom_properties: {
              uuid: "155dc7a6-d18b-4220-9777-fad2d8e08607",
              user_id: 120,
              generated_conversions: {
                thumb: true,
                icon: true
            }
            },
            responsive_images: [],
            order_column: 962,
            created_at: "2023-11-06 05:02:55",
            updated_at: "2023-11-06 05:02:55",
            url: "https://purehub.store/public/storage/app/public/1009/IMG_0059.jpg",
            thumb: "https://purehub.store/public/storage/app/public/1009/conversions/IMG_0059-thumb.jpg",
            icon: "https://purehub.store/public/storage/app/public/1009/conversions/IMG_0059-icon.jpg",
            formated_size: "183.3 KB"
        }
        ]
      },
      {
        id: 40,
        name: "رحلة ابو مشاري مكة",
        name_ar: "رحلة ابو مشاري مكة",
        description: "<p>test<br></p>",
        description_ar: null,
        address: null,
        latitude: "",
        longitude: "",
        phone: null,
        mobile: "0987653",
        price: 12,
        discount_price: 1,
        package_items_count: 100,
        category_id: 20,
        information: null,
        admin_commission: 30,
        delivery_fee: 0,
        delivery_range: 0,
        default_tax: 15,
        closed: false,
        active: true,
        available_for_delivery: false,
        created_at: "2023-11-06 12:29:36",
        updated_at: "2023-11-08 09:48:12",
        custom_fields: [],
        has_media: true,
        rate: null,
        media: [
          {
            id: 1034,
            model_type: "App\\Models\\Market",
          model_id: 40,
            collection_name: "image",
            name: "bed-pool",
            file_name: "bed-pool.jpg",
            mime_type: "image/jpeg",
            disk: "public",
            size: 1009723,
            manipulations: [],
            custom_properties: {
              uuid: "04c2f622-bf0c-424a-a218-8edc695836b7",
              user_id: 120,
              generated_conversions: {
                thumb: true,
                icon: true
            }
            },
            responsive_images: [],
            order_column: 986,
            created_at: "2023-11-06 12:32:55",
            updated_at: "2023-11-06 12:32:55",
            url: "https://purehub.store/public/storage/app/public/1034/bed-pool.jpg",
            thumb: "https://purehub.store/public/storage/app/public/1034/conversions/bed-pool-thumb.jpg",
            icon: "https://purehub.store/public/storage/app/public/1034/conversions/bed-pool-icon.jpg",
            formated_size: "986.1 KB"
        }
        ]
      },
      {
        id: 41,
        name: "رحلة ابو مشاري",
        name_ar: "رحلة ابو مشاري",
        description: "<p>ففففففف<br></p>",
        description_ar: null,
        address: null,
        latitude: "",
        longitude: "",
        phone: null,
        mobile: "098765432",
        price: 122,
        discount_price: 12,
        package_items_count: 100,
        category_id: 20,
        information: null,
        admin_commission: 30,
        delivery_fee: 0,
        delivery_range: 0,
        default_tax: 15,
        closed: false,
        active: true,
        available_for_delivery: false,
        created_at: "2023-11-06 12:32:00",
        updated_at: "2023-11-18 11:14:22",
        custom_fields: [],
        has_media: true,
        rate: null,
        media: [
          {
            id: 1062,
            model_type: "App\\Models\\Market",
          model_id: 41,
            collection_name: "image",
            name: "tervel",
            file_name: "tervel.png",
            mime_type: "image/png",
            disk: "public",
            size: 2494909,
            manipulations: [],
            custom_properties: {
              uuid: "26f50597-4b29-4eea-878b-2d58ac07343b",
              user_id: 120,
              generated_conversions: {
                thumb: true,
                icon: true
            }
            },
            responsive_images: [],
            order_column: 1013,
            created_at: "2023-11-18 11:15:15",
            updated_at: "2023-11-18 11:15:15",
            url: "https://purehub.store/public/storage/app/public/1062/tervel.png",
            thumb: "https://purehub.store/public/storage/app/public/1062/conversions/tervel-thumb.jpg",
            icon: "https://purehub.store/public/storage/app/public/1062/conversions/tervel-icon.jpg",
            formated_size: "2.4 MB"
        }
        ]
      },
      {
        id: 48,
        name: "رحلة ابو مشاري",
        name_ar: "ثامر للسفر والسياحة",
        description: "<p>test<br></p>",
        description_ar: null,
        address: null,
        latitude: "",
        longitude: "",
        phone: null,
        mobile: "0987653",
        price: 100,
        discount_price: 20,
        package_items_count: 120,
        category_id: 20,
        information: null,
        admin_commission: 30,
        delivery_fee: 0,
        delivery_range: 0,
        default_tax: null,
        closed: false,
        active: true,
        available_for_delivery: false,
        created_at: "2023-11-19 16:09:03",
        updated_at: "2023-11-19 16:09:50",
        custom_fields: [],
        has_media: true,
        rate: null,
        media: [
          {
            id: 1064,
            model_type: "App\\Models\\Market",
          model_id: 48,
            collection_name: "image",
            name: "provider_venue_633ef3148d94b",
            file_name: "provider_venue_633ef3148d94b.png",
            mime_type: "image/png",
            disk: "public",
            size: 1644872,
            manipulations: [],
            custom_properties: {
              uuid: "31f8b031-4275-487b-8412-2393ce811fba",
              user_id: 120,
              generated_conversions: {
                thumb: true,
                icon: true
            }
            },
            responsive_images: [],
            order_column: 1014,
            created_at: "2023-11-19 16:09:03",
            updated_at: "2023-11-19 16:09:03",
            url: "https://purehub.store/public/storage/app/public/1064/provider_venue_633ef3148d94b.png",
            thumb: "https://purehub.store/public/storage/app/public/1064/conversions/provider_venue_633ef3148d94b-thumb.jpg",
            icon: "https://purehub.store/public/storage/app/public/1064/conversions/provider_venue_633ef3148d94b-icon.jpg",
            formated_size: "1.6 MB"
        }
        ]
      },
      {
        id: 51,
        name: "tes",
        name_ar: "tes",
        description: "<p>eee</p>",
        description_ar: null,
        address: null,
        latitude: "",
        longitude: "",
        phone: null,
        mobile: "0123456789",
        price: 1212,
        discount_price: 1,
        package_items_count: 22,
        category_id: 20,
        information: null,
        admin_commission: 21,
        delivery_fee: 0,
        delivery_range: 0,
        default_tax: 1,
        closed: false,
        active: true,
        available_for_delivery: false,
        created_at: "2023-11-21 07:57:12",
        updated_at: "2023-11-21 07:57:12",
        custom_fields: [],
        has_media: true,
        rate: null,
        media: [
          {
            id: 1070,
            model_type: "App\\Models\\Market",
          model_id: 51,
            collection_name: "image",
            name: "test",
            file_name: "test.png",
            mime_type: "image/png",
            disk: "public",
            size: 1535029,
            manipulations: [],
            custom_properties: {
              uuid: "dd0de087-7628-4d72-8177-abb7a1b41d63",
              user_id: 120,
              generated_conversions: {
                thumb: true,
                icon: true
            }
            },
            responsive_images: [],
            order_column: 1018,
            created_at: "2023-11-21 07:57:12",
            updated_at: "2023-11-21 07:57:12",
            url: "https://purehub.store/public/storage/app/public/1070/test.png",
            thumb: "https://purehub.store/public/storage/app/public/1070/conversions/test-thumb.jpg",
            icon: "https://purehub.store/public/storage/app/public/1070/conversions/test-icon.jpg",
            formated_size: "1.5 MB"
        }
        ]
      },
      {
        id: 52,
        name: "Yosri mahjoub",
        name_ar: "Yosri mahjoub",
        description: "<p>eeeeeeeeee</p>",
        description_ar: null,
        address: null,
        latitude: "",
        longitude: "",
        phone: null,
        mobile: "0123456789",
        price: 12,
        discount_price: 2,
        package_items_count: 2,
        category_id: 20,
        information: null,
        admin_commission: 23,
        delivery_fee: 0,
        delivery_range: 0,
        default_tax: 15,
        closed: false,
        active: true,
        available_for_delivery: false,
        created_at: "2023-11-21 07:58:18",
        updated_at: "2023-11-21 07:58:18",
        custom_fields: [],
        has_media: true,
        rate: null,
        media: [
          {
            id: 1071,
            model_type: "App\\Models\\Market",
          model_id: 52,
            collection_name: "image",
            name: "provider_venue",
            file_name: "provider_venue.png",
            mime_type: "image/png",
            disk: "public",
            size: 743982,
            manipulations: [],
            custom_properties: {
              uuid: "c7d0652b-d720-4b14-b183-512c1008493c",
              user_id: 120,
              generated_conversions: {
                thumb: true,
                icon: true
            }
            },
            responsive_images: [],
            order_column: 1019,
            created_at: "2023-11-21 07:58:18",
            updated_at: "2023-11-21 07:58:18",
            url: "https://purehub.store/public/storage/app/public/1071/provider_venue.png",
            thumb: "https://purehub.store/public/storage/app/public/1071/conversions/provider_venue-thumb.jpg",
            icon: "https://purehub.store/public/storage/app/public/1071/conversions/provider_venue-icon.jpg",
            formated_size: "726.5 KB"
        }
        ]
      },
      {
        id: 53,
        name: "Yosri mahjoub",
        name_ar: "Yosri mahjoub",
        description: "<p>wwwwwwww</p>",
        description_ar: null,
        address: null,
        latitude: "",
        longitude: "",
        phone: null,
        mobile: "0123456789",
        price: 12,
        discount_price: 2,
        package_items_count: 2,
        category_id: 20,
        information: null,
        admin_commission: 23,
        delivery_fee: 0,
        delivery_range: 0,
        default_tax: 15,
        closed: false,
        active: true,
        available_for_delivery: false,
        created_at: "2023-11-21 08:48:34",
        updated_at: "2023-11-21 08:48:34",
        custom_fields: [],
        has_media: false,
        rate: null,
        media: []
      }
    ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://purehub.store/public/api/markets');
        
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       console.log('api Res:', result);
  //       setMarketData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
    <div className=" px-8 flex flex-col gap-7 mt-10">
    <div className="flex items-start justify-start">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            My <span className="text-[#54cdb7]">Booking</span>
          </p>
          
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
          {data.map((item, index) => (
            <PlacesCard
              key={index}
              image={item.media.length > 0 ? item.media[0].url : morocco}
              price={item.price}
              name={item.name}
              desc="يمكن للمسافرين الذين لديهم تذاكر إلكترونية مؤكدة إصدار بطاقات الصعود عن طريق الإنترنت خلال 48 ساعة وحتى ساعة من موعد مغادرة الرحلة. تتوفر هذه الخدمة لجميع الرحلات الداخلية وبعض الرحلات الدولية. "
            />
          ))}
        </div>
    </div>
    </>
  )
}

export default Hotels