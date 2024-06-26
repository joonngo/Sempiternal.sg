"use strict"
var products = [
  { 
    "id": "1",
    "name": "SS1 TEE SHIRT",
    "preview": "img/S1.jpg",
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  },
  {
    "id": "2",
    "name": "Men Black MAMGP T7 Sweat Sporty Jacket",
    "preview": "img/s2.jpg",
    "description": "Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining",
    "size": [
    
    ],
    "isAccessory": false,
    "brand": "Puma",
    "price": 7999
  },
  {
    "id": "3",
    "name": "Men Black Action Parkview Lifestyle Shoes",
    "preview": "img/s3.jpg",
    "description": "Flaunt an effortless look with this ultimate pair of black coloured formal shoes from the house of Hush Puppies. Let the sun go down for uncomfortable shoes, as you opt for this pair of formal shoes that is crafted using comfortable TPR (thermoplastic rubber) sole. Pair these formal shoes with a shirt and trousers to look absolutely handsome",
    "size": [
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": false,
    "brand": "Hush Puppies",
    "price": 6999
  },
  {
    "id": "4",
    "name": "Women Black Solid Lightweight Leather Jacket",
    "preview": "img/s4.jpg",
    "description": "Black solid leather jacket, has a spread collar, 3 pockets, zip closure, long sleeves, straight hem, polyester lining",
    "size": [
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": false,
    "brand": "BARESKIN",
    "price": 9999
  },
  {
    "id": "5",
    "name": "Women Blue Solid Shirt Dress",
    "preview": "img/s5.jpg",
    "description": "Blue solid woven shirt dress, has a shirt collar, sleeveless, button closure, flared hem",
    "size": [
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": false,
    "brand": "SASSAFRAS",
    "price": 5200
  },
  {
    "id": "6",
    "name": "Unisex Silver-Toned Series 3 Smart Watch",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/dd1e37da-0de2-417f-abd2-6df8996040eb1558948536526-Apple-Unisex-Smart-Watches-1441558948536225-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/9dfea59a-4d94-43bd-a140-77b58e42e8971558948536512-Apple-Unisex-Smart-Watches-1441558948536225-3.jpg"
    ],
    "description": "Low and high heart rate notifications. Emergency SOS. New Breathe watch faces. Automatic workout detection. New yoga and hiking workouts. Advanced features for runners like cadence and pace alerts. New head-to-head competitions. Activity sharing with friends. Personalized coaching. Monthly challenges and achievement awards. Walkie-Talkie, make phone calls, and send messages. Listen to Apple Music and Apple Podcasts. Use Siri in all-new ways. Silver aluminum case. Built-in GPS, GLONASS, Galileo, and QZSS. S3 with dual-core processor. W2 Apple wireless chip. Barometric altimeter Capacity 8GB. Optical heart sensor. 1 Year Manufacture Warranty",
    "size": [
      1,
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": true,
    "brand": "Apple",
    "price": 31999
  },
  {
    "id": "7",
    "name": "Unisex Black & Green Reflex 2.0 Smart Band",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/1d9bda95-b63e-4312-bbfa-c25b377c96c21550920383126-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/2261262d-8f2f-4451-9584-9d0cb90e48cf1550920383155-3.jpg"
    ],
    "description": "The new Fastrack Reflex 2.0 Activity Tracker comes with all the features one could ask for! It comes in three colours that you can use to accentuate your athleisure, casual or party attire. Not only does it look uber cool in this cool grey & electric blue accent, further the TPU (Thermoplastic Polyurethane) strap ensures it gives you a snugfit while staying light on your wrist! It is a fitness band with smartwatch features. The band has Steps, Distance and Calorie Tracker, Sleep Tracker, Call & SMS Alerts, OLED Display, 10 Days Power Reserve, Vibration Alarm, Sedentary Reminder and is IPX6 Water Resistant. This band is compatible with both IOS and Android OS. It has a secure 'Pin' based pairing with your phone, for better protection. And, all of this at a price that is hard match anywhere else with quality and promise of the brand Fastrack. Move on and get one for yourself!",
    "size": [
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": true,
    "brand": "Fastrack",
    "price": 1999
  },
  {
    "id": "8",
    "name": "Unisex Black Galaxy Fit Fitness Band",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/74a60845-202d-4cea-9531-e16931bd994a1561362162628-Samsung-Galaxy-Fit-4801561362161527-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/eb5f1aca-1b71-49fa-9c41-aba51f6b01941561362162569-Samsung-Galaxy-Fit-4801561362161527-4.jpg"
    ],
    "description": "Keep up your routine for even longer. With plenty of power to last throughout your daily workouts, you can pack in those longer hours to reach your fitness goals. What's more, you won't have to worry about disruptive battery discharge when tracking your activity.",
    "size": [
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": true,
    "brand": "Samsung",
    "price": 9990
  },
  {
    "id": "9",
    "name": "Gear IconX Black Cord-free Fitness Earbuds",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/0423d170-fb49-450f-aef9-bbeb7003554d1554802772913-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/94813947-e557-4755-9d3d-22529436a1681554802772853-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-5.jpg"
    ],
    "description": "Speak commands via Bixby or Google Voice and control your music with just a tap or swipe. Meet your fitness goals with speed, distance, calorie tracking and real-time voice guidance. Find the perfect fit with multiple sizes of ear-tips and wing-tips right in the box. iOS/Mac users: Samsung Gear IconX can be used to stream music or take calls from your iOS handset or tablet. Fitness Functions that require the use of Samsung S-Health app are not available for iOS. 5 hours of Bluetooth streaming, 7 hours of MP3 listening, 4 hours talk time. Warranty: 6 months. Warranty provided by the brand owner / manufacturer",
    "size": [
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": true,
    "brand": "Samsung",
    "price": 13990
  },
  {
    "id": "10",
    "name": "White 2nd Gen AirPods with Charging Case",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/9b14396e-0ee1-46b4-833c-4a2c35b5ce661558948436160-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/27569983-fada-4874-9306-14c945c234781558948436148-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-3.jpg"
    ],
    "description": "AirPods with Charging Case: More than 24 hours listening time,3 up to 18 hours talk time8. AirPods (single charge): Up to 5 hours listening time,1 up to 3 hours talk time2. 15 minutes in the case equals up to 3 hours listening time4 or up to 2 hours talk time. Warranty: 1 year. Warranty provided by Brand/Manufacturer",
    "size": [
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": true,
    "brand": "Apple",
    "price": 14999
  }
];

$(document).ready(function() {
  $('#containerSlider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

function dynamicClothingSection(ob) {
  var boxDiv = document.createElement("div");
  boxDiv.id = "box";

  var boxLink = document.createElement("a");
  // boxLink.href = '#'
  boxLink.href = "./contentDetails.html?" + ob.id;
  localStorage.setItem('productDetail', JSON.stringify(ob));

  var imgTag = document.createElement("img");
  // imgTag.id = 'image1'
  // imgTag.id = ob.photos
  imgTag.src = ob.preview;

  var detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  var h3 = document.createElement("h3");
  var h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  var h4 = document.createElement("h4");
  var h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  var h2 = document.createElement("h2");
  var h2Text = document.createTextNode("rs  " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

//  TO SHOW THE RENDERED CODE IN CONSOLE

var mainContainer = document.getElementById("mainContainer");
var containerClothing = document.getElementById("containerClothing");
var containerAccessories = document.getElementById("containerAccessories");

if (document.cookie.indexOf(",counter=") >= 0) {
  var counter = document.cookie.split(",")[1].split("=")[1];
  document.getElementById("badge").innerHTML = counter;
}
for (var i = 0; i < products.length; i++) {
  if (products[i].isAccessory) {
    containerAccessories.appendChild(
        dynamicClothingSection(products[i])
    );
  } else {
    containerClothing.appendChild(
        dynamicClothingSection(products[i])
    );
  }
}
