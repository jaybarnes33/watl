import React, { useEffect, useState } from "react";
import PageHeader from "./global-components/page-header";
import Navbar from "./global-components/navbar";
import { useParams } from "react-router-dom";
import Footer from "./global-components/footer";
import axios from "axios";
import { BaseAPIURL } from "../API/base";
import { Link } from "react-router-dom";
import Loader from "./global-components/loader";

const FISHING_EXCURSIONS = [
  {
    countryName: "The Gambia",
    title: "Fishing in The Gambia",
    description:
      "We offer a range of fishing options in The Gambia, from beach casting to creek fishing and for the more adventurous sport fishing, all provide the opportunity for 'big catches' of several varieties.",
  },
  {
    countryName: "Ghana",
    title: "Blue Marlin Fishing in Ghana",
    description:
      "Bring your daydream alive with Blue Marlin fishing in Ghana in Ado Foah and Takoradi catches include Yellow Fin, Big eye Tuna and much more. Game fishing is the ultimate true African experience on a catch, photograph and release basis recording memories of your fisherman's tales.",
  },
  {
    countryName: "Senegal",
    title: "Fishing in Senegal",
    description:
      "Fishing in Senegal is fantastic for enthusiast and those with just a casual interest. Deep sea fishing can be arranged in Saly and a more relaxed fishing along the rivers, mangroves and creeks of Sine Saloum Delta, whichever one you go for you are sure to hook plenty.",
  },
  {
    countryName: "Sierra Leone",
    title: "Big Game Fishing in Sierra Leone",
    description:
      "The Bonthe Holiday Village in Serra Leone offers great opportunities for big game fishing. Bonthe is a remote, attractive, old town on a large island off southern Sierra Leone. In colonial times it used to be a major trading centre for piassava and other agricultural products. Besides fishing and excellent opportunities for bird watching, this is a town with a lot of character.Record fish have been caught with live bait in the estuary, but there is also the possibility of fly fishing in the tarpon breeding grounds. Other fishing (trolling for barracuda, grouper, jack, etc) is available all the year round.",
  },
  {
    countryName: "Cote D'Ivoire",
    title: "Blue Marlin Fishing in Ivory Coast",
    description:
      "Ivory Coast boasts some of the best blue marlin fishing in the eastern Atlantic, especially during the two peak seasons of November/ December (descending migration) and March/April (ascending migration). It is one of the few spots where one can rely on two distinct annual blue marlin migrations, but depending on a combination of such factors such as wind, current, and water temperature changes both migrations could be year-round events.",
  },
  {
    countryName: "Benin",
    title: "Fishing in Benin",
    description:
      "Lately, in Benin it seems that fishing is a popular way to attract you the tourist. It's possible to go out and fish off the coast, where an array of fish awaits your live bait. It was actually the Ghanaian fisherman you see that brought deep-sea fishing to the Beninese. West African Tours ensures we have the right permits so you can venture off to fish some of the inland waters with a tour group or alone with guide. Lake Nokoue lies in southern Benin, and though not very big, offers some nice fishing venues we can take you to.",
  },
];

const TREKKING_EXCURSIONS = [
  {
    countryName: "Togo",
    title: "Trekking in Togo's Atakora Mountains",
    description:
      'Togo might not be the first destination that comes to mind when thinking of a trekking trip, however its remote villages in the Atakora Mountains offer a very unique mix of culture and trekking in a truly remote and little visited part of the world. Walking from village to village, the journey through this otherworldly landscape is a remarkable experience, which captured the imagination of Le Corbusier who defined the dwellings as "sculptural architecture".',
  },
  {
    countryName: "Ghana",
    title: "Trekking in Ghana's Highlands",
    description:
      "The trek to summit Afadjato, the highest mountain in Ghana (885m) is a steep climb through lush vegetation and sacred waterfalls. Wildlife sightings are also possible and from the summit views of Lake Volta, the rolling hills and surrounding villages can be enjoyed as well as views over the neighbouring mountains in Togo. Also in Tafi Atome, situated in the Volta region, it is possible to take a walk accompanied by local trackers in search of the Mona monkeys, once considered sacred and today protected by a project that successfully supports the local communities whilst ensuring the conservation of this species.",
  },
  {
    countryName: "Benin",
    title: "Hiking in Benin's Diverse Landscape",
    description:
      "Benin's variable landscape with beaches, bays, savanna, rivers, jungles, low hills and mountains is good for hiking. We can take you trekking in Benin for in Pendjari National Park, which is rich in wildlife and birds. We offer guided walking tours in the national park, with our local guide who is familiar with the area we use for hiking.",
  },
  {
    countryName: "Senegal",
    title: "Trekking Through Senegal",
    description:
      "The Trek is a new way to discover Senegal because very few practiced it before. The large number of small straw villages in the cross rides promotes true and sincere encountering especially as indigenous never sees European trekkers. Our Senegal trekking tour will take you through a unique experience into amazing landscapes of beauty well far away from our reference marks and beyond time. We will travel first through Senegal along the Big Atlantic Coast towards the desert of Lompoul with its magnificent background of 40 to 50 meter-high hills. From Lompoul we will go to the Eastern part of the country where we will visit the Nikolo Koba Park, an important animal and plant biodiversity sanctuary for starters.",
  },
  {
    countryName: "Sierra Leone",
    title: "Trekking in Sierra Leone's Rainforest",
    description:
      "Let us take you along a footpath through a tropical rain forest in Sierra Leone that is like an art gallery of mighty trees of enormous dimensions, lianas and ferns. From time to time a clearing opens up, in which manioc, peanuts and beans have been planted. For serious trekkers come and stand on the roof of West Africa, the summit of Bintumani seeing chimpanzees along the way.",
  },
];

const CULTURAL_EXCURSIONS = [
  {
    countryName: "SeneGambia",
    title: "Rhythms of SeneGambia",
    description:
      "Immerse yourself into the beauty and enchantment of both Senegal and The Gambia. Explore rich historical Slavery sites, monumental mosques and impressive nature reserves and wildlife. Cruise along the Gambian river to Juffureh (Roots) and Visit Goree Island, also known as 'the door of no return' in Dakar. Swim in the famous Pink Lake and ride in a horse drawn carriage in St Louis to complete this unique Cultural journey.",
  },
  {
    countryName: "Mali",
    title: "Magnificent Cultural Journey of Mali",
    description:
      "Be introduced to Mali's magnificent ethnic diversity, history and exuberant styles with a visit to the National Museum in Bamako. Marvel at the Grand Mosque in Djenne, cruise along the Niger River and be fascinated by dwellings in Dogon. Explore the ancient houses in Timbuktu and visit Segou the former capital of the Bambara kingdom. To end your cultural journey, photograph the amazing wildlife and shop for souvenirs to complete this trip of a life time.",
  },
  {
    countryName: "Ghana",
    title: "A Cultural Taste of Ghana",
    description:
      "Ghana welcomes you to its haven that combines charms and great historical heritage. Be astounded in Accra by the makers of unique fantasy coffins at the casket making shops and observe the craftsmen in Ashanti villages. Visit the Kakum National Park, and dare to experience the walk on the canopy suspended 100 feet from the ground for a panoramic view of the flora and fauna. Experience the rich Asante culture at the Manhiyia palace the official residence of the Asante king. Sip palm wine in Kumasi and enjoy shopping at it's the biggest open air market to mark the end of this dream tour.",
  },
  {
    countryName: "The Gambia",
    title: "A Taste of Gambia",
    description:
      "For starters orientate yourself with our City Tour beginning in the capital, with visits to the museum, local markets and the famous Katchikally crocodile pool. For the main course of your holiday, enjoy a 4 wheel drive adventure and then back in time to discover the Roots tour about the slave history, walk around Juffureh village before sailing over to James Island, spotting dolphins along the way. Then enjoy the sweeter side of your trip with relaxing days on the beach, topped off with a Lazy day Cruise on the river Gambia.",
  },
  {
    countryName: "Sierra Leone",
    title: "Cultural Exploration in Sierra Leone",
    description:
      "Explore colonial heritage at the old slave fort on Bunce Island, meander through the vibrant capital Freetown, visit a chimp sanctuary to meet our closest relatives and then look for them in the wild at lovely Tiwai Island. Relax on the charmingly isolated Banana Islands, and visit friendly fishing villages to gain a glimpse of local traditions. Sierra Leone deserves more attention so enjoy being one of the first to make it back to this fantastic corner of the continent.",
  },
  {
    countryName: "Cote D'Ivoire",
    title: "Discover Ivory Coast",
    description:
      "The culture of Ivory Coast is diverse with sixty different indigenous ethnic group divided into the cultural regions of the East Atlantic, West Atlantic, Voltaic and Mande. Experience real Africa in the Northeast, and discover a unique native people, the Lobi, an unspoilt landscape in Cameo National Park, a dream for safari aficianados. Here you will find roaming free; lions, panthers, hippos, buffalos and more. While Ivory Coast has a varied culture and wildlife, the beaches are no less enchanting, the crafts, gifts and souvenirs are unbelievably priced, if you will bargain and be patient.",
  },
  {
    countryName: "Ghana Photography",
    title: "Photography and Art: Ghana",
    description:
      "Hogbetsotso Festival is a festival of the people of Anlo in the Volta Region of Ghana. The theme behind this festival is to mark their journey from their former home in Togo, to their present settlement in Ghana, photograph this festival in motion, so you do not forget what a fantastic vision it is. Another photo shoot opportunity is the Wechiau Hippo Sanctuary; a community protected area is located at the extreme north-western corner of the Upper West Region of Ghana.",
  },
  {
    countryName: "SeneGambia Photography",
    title: "Photography and Art: The Gambia and Senegal",
    description:
      "The Gambia and Senegal make wonderful photography destinations because of the bustling markets full of textiles and folk art, remote indigenous villages, unusual birds and wildlife, interesting archeological sites, pretty colonial architecture, and the fishing villages along the river. Make sure you have sufficient film to cover all the fascinating sights to see.",
  },
  {
    countryName: "Burkina Faso",
    title: "Burkina Faso's Ouagadougou's Main Attractions",
    description:
      "The Ethnography Museum, the National Museum, the Snake Museum and the Moro-Naba Palace are just some of the photographic hotspots you may even get the chance to record the interesting Moro-Naba ceremony, with traditional costumes and drums.",
  },
];

const CRUISE_SERVICES = {
  title: "Cruise Ship Services",
  description:
    "West African Tours are proud to include Cruise Ships as part of our Destination Management Services, from the moment the ships arrive at the various ports of West Africa, we coordinate their day excursions with precision. The planning starts before their arrival, tailoring our tours to suit their client's budget and interests. Ensuring that the guests have a memorable day, get to relax and explore, our work does not finish until they are all back on board in time for the ships departure. We are proud to work alongside cruise companies such as: Travel Dynamics, Seven Seas and Holland America to mention but a few.",
  partners: ["Travel Dynamics", "Seven Seas", "Holland America"],
};

const RELIGIOUS_SERVICES = {
  title: "Religious Groups",
  description:
    "At West African Tours, we can coordinate travel arrangements to get to The Gambia, Senegal, Ghana, Togo, Benin and Mali. For conference type gatherings we can assist with booking of venues and include conference materials. We can also transport around the various countries to different church meeting venues, provide in and out transfers and for leisure add appropriate tours to round off the whole experience for added value.",

  images: ["/assets/img/religious-groups.jpg"],
};

const BIRDING_EXCURSIONS = [
  {
    countryName: "Senegal",
    title: "Birds of Paradise in Nikolo Koba Park",
    description:
      "Get a bird's eye view in this paradise, where approximately 330 species have been sighted. Add to this the contrast of habitat, spectacular scenery with the Gambia River which flows through this National Park. You can also expect to see extraordinary wild life such as baboons, hippos and chimpanzees in a 4WD vehicle. Explore the city and shop in Dakar to conclude your adventure",
  },
  {
    countryName: "The Gambia",
    title: "Birding around The Gambia",
    description:
      "Be thrilled with an assortment of birding hot spots ranging from the hotel ground, nature reserves and bird reserves. Enjoy evening bird walking at Janjangbureh and Tendaba Camp before heading to Keur Saloum. Cruise to Sipo Island and grab the first class photographic opportunities of over 250 species along the way. You will leave The Gambia dazzled by the amazing variety of bird life.",
  },
  {
    countryName: "Ghana",
    title: "Birding and Nature Paradise in Ghana",
    description:
      "With some of the most avian rich bio diverse rainforests and savannah habitats in Africa, Ghana is a must for any serious birding and wildlife enthusiast. Our birding and nature tours are specifically designed for keen birders with a love for all wildlife. Our main focus are the birds, however our guides will also be searching for all wildlife species and taking the time so that you can appreciate all that we see. Ghana also protects nearly 1000 species of butterflies many endemic to its biologically rich and varied habitat. So it's a paradise for nature lovers, our birding and butterfly tours are slower paced allowing quality time to appreciate all of Ghana's flora and fauna. These tours are ideal for avid or amateur photographers as we make time, allowing the best opportunity for that perfect image.",
  },
];

const WILDLIFE_EXCURSIONS = [
  {
    countryName: "Cote D'Ivoire",
    title: "Nature in Ivory Coast",
    description:
      "No African holiday to Ivory Coast would be complete without seeing the incredible animals that make this land their home. At Comoë National Park, visitors can view waterbucks, hippos and lions. About an hour's trip outside Yamoussoukro you'll find The Abokouamekro Game Reserve. In Taï National Park you'll discover the endangered species of the Colobus monkeys and the Pygmy Hippopotamus. You can perhaps even catch a glimpse of leopards and chimpanzees.",
  },
  {
    countryName: "Benin",
    title: "Wild life in Benin",
    description:
      "Enjoy the beautiful nature and picturesque villages around Possotome and Bopa where it is possible to camp at the border of Lake Aheme. Take the pirogue to watch hippo's from close distance in one of the river site villages near Dassa-Zoume; the area of 41 hills. Go for a safari and watch real wildlife in National Park Penjari. Enjoy the rich population of animals, and besides the elephants, buffalo's, hippos, hyena's, monkeys and antelopes, it is also possible to spot a lion.",
  },
];

const NATURE_SERVICES = [...BIRDING_EXCURSIONS, ...WILDLIFE_EXCURSIONS];

const ECO_TOURISM_EXCURSIONS = [
  {
    countryName: "Introduction",
    title: "Eco Tourism in West Africa",
    description:
      "West African Tours makes great efforts to include tourism projects in our tours, which operate in line with our vision. We believe tourism should be organized in harmony with nature and local communities. We are guided by the notion that local people should be enabled to generate income from tourism to alleviate their poverty levels, alongside the preservation of our delicate natural resources and endangered animal species should be ensured and encouraged.",
  },
  {
    countryName: "The Travel Foundation",
    title: "The Travel Foundation",
    description:
      "The foundation was set up to assist unofficial guides, craftsmen, fruit sellers, stallholders & local taxi drivers, to sell their products & services to holiday-makers and to better engage in the wider tourism industry. It is part of a Responsible Tourism Partnership bringing together UK tour operators, ground tour operators, hoteliers & tourism bodies & these suppliers.",
  },
  {
    countryName: "Ecotourism Hotspots",
    title: "Ecotourism Hotspots",
    description:
      "Our experienced meeting and event planners are there to help you to stay productive. In a fully equipped meeting space with the latest audiovisual technologies, five multi-functional break-out rooms and an elegant ballroom with the capacity to cater for events up to 600 guests are just one of the options we can offer.",
  },
  {
    countryName: "The Gambia",
    title: "Eco Tourism in The Gambia",
    description:
      "In The Gambia Tumani Tenda Camp a community evolved which is described as a religious community embracing certain values, notably a sustainable attitude to the natural environment, a socially responsible style of living, respect for the elderly, independence, self-sustainability and a sense of community. Farming, local cooking lessons canoe trips, tree planning are just some of the earth friendly activities offered",
  },
  {
    countryName: "Ghana",
    title: "Eco Tourism in Ghana",
    description:
      "Mole and Kakum National Parks and the Assin Attandanso Resource Reserve are but two of many eco tourist attractions in Ghana. But, from opposite ends of the country, they beckon you to explore their lands, to contribute to the growth of sustainable economy and environment, and to leave having something to write home about.",
  },
  {
    countryName: "Benin",
    title: "Eco Tourism in Benin",
    description:
      "The pleasant Tobe Forest is protected privately, by Alain Ratie and his collaborators. It aims to conserve natural resources based on local traditions and at local development through honey production, ecotourism and other income generating activities.",
  },
];

const gambiaBirdingTours = {
  oneWeek: {
    title: "One Week Birding Around the Gambia",
    days: [
      {
        day: 1,
        activities: [
          "Afternoon arrival and transfer to hotel with Gambia Experience.",
          "Brief meeting at reception and local bird guide to discuss itinerary for the week ahead.",
          "Dinner and overnight at Senegambia Beach Hotel",
        ],
      },
      {
        day: 2,
        activities: [
          "Morning excursion to Abuko Nature Reserve",
          "Lunch at Lamin Lodge",
          "Afternoon visit Lamin Fields",
          "Dinner and overnight at Hotel",
        ],
      },
      {
        day: 3,
        activities: [
          "Morning visit to Brufut Forest area",
          "Lunch at Tanji Reserve Centre",
          "Afternoon visit to Tujereng & Tanji village/beach",
          "Dinner and overnight at Hotel",
        ],
      },
      {
        day: 4,
        activities: [
          "Leave hotel early with picnic breakfast to Banjul, cross with the ferry to the North Bank",
          "Birding stops on the way",
          "Picnic Lunch from hotel eaten on the way",
          "Late afternoon Batelling East Track",
          "Dinner and overnight at Tendaba Camp",
        ],
      },
      {
        day: 5,
        activities: [
          "Breakfast at Tendaba",
          "Morning Batelling South Track to the Kiang West National Park",
          "Lunch at Tendaba Camp",
          "Afternoon creek crawl / boat trip to the north bank of the River",
          "Dinner and overnight at Tendaba Camp",
        ],
      },
      {
        day: 6,
        activities: [
          "Breakfast at Tendaba",
          "Morning Tendaba school area, airfield and Konko Ba area",
          "Lunch at Kalagi River Side",
          "Afternoon birding along the way back to the hotel",
          "Dinner and overnight at the hotel",
        ],
      },
      {
        day: 7,
        activities: [
          "Full day excursion - morning spent at Marakissa area",
          "Lunch at Marakissa River Lodge",
          "Afternoon birding around Darsilami area",
          "Dinner and overnight at Hotel",
        ],
      },
    ],
  },
  twoWeek: {
    title: "Two Week Birding Around the Gambia",
    days: [
      {
        day: 1,
        activities: [
          "Arrive to The Gambia",
          "Transfer to Hotel",
          "Brief evening meet at 7pm in hotel reception with our representative to discuss your itinerary for the week ahead",
          "Dinner and overnight at Hotel",
        ],
      },
      {
        day: 2,
        activities: [
          "Breakfast at Hotel",
          "Morning visit to Brufut Forest area",
          "Lunch at Tanji Bird Reserve Restaurant",
          "Afternoon visit Tujereng and Tanji Beach",
          "Dinner and overnight at Hotel",
        ],
      },
      {
        day: 3,
        activities: [
          "Breakfast at Hotel",
          "Morning Excursion to Abuko Nature Reserve",
          "Lunch at Lamin Lodge",
          "Afternoon visit Lamin Fields and Yundum",
          "Dinner and overnight at Hotel",
        ],
      },
      {
        day: 4,
        activities: [
          "Breakfast at Hotel",
          "Full day excursion - morning spent at Marakissa area",
          "Lunch at Marakissa River Lodge",
          "Afternoon birding around Darsilami area",
          "Dinner and overnight at Senegambia Beach Hotel",
        ],
      },
      {
        day: 5,
        activities: [
          "Breakfast at Hotel",
          "Drive to Banjul, cross by ferry to North bank (Depending on the ferry)",
          "Travel North Bank road, making key birding stops along the way",
          "Picnic Lunch from Hotel eaten on the way",
          "Dinner and overnight at Baobolong Annex Camp",
        ],
      },
      {
        day: 6,
        activities: [
          "Breakfast at Baobolong Annex",
          "Boat trip: Travel by boat from camp to Sapu",
          "Lunch on boat",
          "Afternoon local birding (walk from Baobolong Annex Camp)",
          "Dinner and overnight at Baobolong Camp",
        ],
      },
      {
        day: 7,
        activities: [
          "Breakfast at Baobolong Annex",
          "Egyptian Plover/Basse and Kunkilling Forest Bansang Quarry",
          "Picnic Lunch from Baobolong Annex eaten on the way",
          "Dinner and overnight at Baobolong Annex Camp",
        ],
      },
      {
        day: 8,
        activities: [
          "Leave Baobolong Annex camp after breakfast",
          "Travel on the South Bank road",
          "Birding stops on the way, particularly Jakhaly Pacharr rice fields",
          "Picnic Lunch from Baobolong eaten on the way",
          "Late afternoon Batelling East Track",
          "Dinner and overnight at Tendaba Camp",
        ],
      },
      {
        day: 9,
        activities: [
          "Breakfast at Tendaba",
          "Morning Batelling South Track to the Kiang West National Park",
          "Lunch at Tendaba Camp",
          "Afternoon creek crawl / boat trip to the north bank of the River",
          "Dinner and overnight at Tendaba Camp",
        ],
      },
      {
        day: 10,
        activities: [
          "Breakfast at Tendaba",
          "Morning creek crawl / boat trip",
          "Early lunch at Tendaba Camp",
          "Afternoon air field and behind Tenbada",
          "Dinner and overnight at Tendaba Camp",
        ],
      },
      {
        day: 11,
        activities: [
          "Early start from Tendaba Camp after breakfast",
          "Mornig birding along the way",
          "Picnic lunch from Tendaba Camp",
          "Afternoon birding around Faraba Banta, Pirang, Bonto area",
          "Dinner and overnight at Hotel",
        ],
      },
      {
        day: 12,
        activities: [
          "Early departure from the Hotel to Gunjur and Kantong area",
          "Picnic Breakfast from Hotel",
          "Morning excursion around the lagoons and Kantong Reserve",
          "Lunch Kantong",
          "Afternoon Boat trip on Alaheni river",
        ],
      },
      {
        day: 13,
        activities: [
          "Breakfast at Hotel",
          "Morning excursion to Fajara Golf Course, Kotu Ponds and Kotu Creek",
          "Lunch at Hotel",
          "Afternoon excursion to Camalou and Bund Road area",
          "Dinner and overnight at Hotel",
        ],
      },
      {
        day: 14,
        activities: [
          "Breakfast at Hotel",
          "Morning birding around hotel ground",
          "Early lunch at Hotel",
          "Leisure before departure",
        ],
      },
    ],
  },
};

const SpecialExcursion = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [excursions, setExcursions] = useState(null);

  const fetchStudentsExcursions = async () => {
    const { data } = await axios.get(BaseAPIURL + "excursions/specialinterest");

    return data.data.results.map((item) => ({
      countryName: item.countryName,
      title: "In " + item.countryName,
      description: item.description,
      ...item,
    }));
  };

  const getExcursionsByType = (type) => {
    switch (type.toLowerCase()) {
      case "fishing":
        return FISHING_EXCURSIONS;
      case "trekking":
        return TREKKING_EXCURSIONS;
      case "culture, music & arts":
        return CULTURAL_EXCURSIONS;
      case "nature groups":
        return NATURE_SERVICES;
      case "cruises":
        return CRUISE_SERVICES;
      case "eco tourism":
        return ECO_TOURISM_EXCURSIONS;
      case "religious groups":
        return RELIGIOUS_SERVICES;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (id.toLowerCase() === "students") {
      (async () => {
        const data = await fetchStudentsExcursions();
        setExcursions(data);
      })();
    } else {
      const excursionsData = getExcursionsByType(id);
      if (excursionsData) {
        setExcursions(excursionsData);
      }
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  const renderGambiaBirdingTours = () => {
    return (
      <div className="gambia-birding-tours">
        <div className="one-week-tour mb-5">
          <h2>{gambiaBirdingTours.oneWeek.title}</h2>
          {gambiaBirdingTours.oneWeek.days.map((day) => (
            <div key={day.day} className="day-schedule mb-4">
              <h3>Day {day.day}</h3>
              <ul className="list-unstyled">
                {day.activities.map((activity, index) => (
                  <li key={index} className="mb-2">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="two-week-tour">
          <h2>{gambiaBirdingTours.twoWeek.title}</h2>
          {gambiaBirdingTours.twoWeek.days.map((day) => (
            <div key={day.day} className="day-schedule mb-4">
              <h3>Day {day.day}</h3>
              <ul className="list-unstyled">
                {day.activities.map((activity, index) => (
                  <li key={index} className="mb-2">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const renderExcursionContent = () => {
    if (!excursions) return null;

    // Special handling for Gambia birding tours

    // Special handling for cruise services and religious services
    if (
      id.toLowerCase() === "cruises" ||
      id.toLowerCase() === "religious groups"
    ) {
      return (
        <div className="services-content my-4">
          <h3>{excursions.title}</h3>
          <p>{excursions.description}</p>
          {excursions?.partners?.length > 0 && (
            <div className="partners mt-4">
              <h4>Our Partners</h4>
              <ul className="list-unstyled">
                {excursions?.partners?.map((partner, index) => (
                  <li key={index}>{partner}</li>
                ))}
              </ul>
            </div>
          )}
          {excursions?.images?.length > 0 && (
            <div className="images-section mt-4">
              <h4>Gallery</h4>
              <div className="row">
                {excursions.images.map((image, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <img
                      src={image}
                      alt={image}
                      className="img-fluid rounded"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    // Default handling for country-based excursions
    return (
      <div className="specials-list my-4">
        {excursions?.map((item) => (
          <div key={item.countryName} className="special-item mb-5">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {id.toLowerCase() === "students" && (
              <Link
                className="btn btn-warning"
                to={`/special-excursions/country/${item.countryName}`}
              >
                Learn more about {item.countryName} &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <PageHeader headertitle={`Special Excursion - ${id}`} />
      <div className="special-excursion-container container">
        {renderExcursionContent()}
        {id.toLowerCase() === "nature groups" && renderGambiaBirdingTours()}
      </div>
      <Footer />
    </>
  );
};

export default SpecialExcursion;
