import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import ListiningItem from "../components/ListiningItem";
import Loader from "../components/Loader";

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [loading, setLoading] = useState(true);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?offer=true&limit=6`);
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=6`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=6`);
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfferListings();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-emerald-50 min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 p-12 px-3 max-w-6xl mx-auto">
        <h1 className="text-emerald-800 font-bold text-3xl lg:text-6xl">
          Find your next perfect <br /> place with ease
        </h1>

        <div className="text-emerald-700 text-xl sm:text-sm">
          PlotNest helps you discover the perfect property for your needs.
          <br /> Whether you're looking to rent, buy, or find special offers.
        </div>
        <Link
          className="text-sm font-bold hover:underline text-emerald-600 bg-emerald-100 px-4 py-2 rounded-lg w-fit"
          to={"/search"}
        >
          Let's get Started
        </Link>
      </div>

      {/* Swiper */}
      <div className="bg-emerald-800 p-4">
        <Swiper navigation className="max-w-8xl mx-auto rounded-lg shadow-lg">
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className="h-[500px]"
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Listings */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-emerald-800">
                Recent Offers
              </h2>
              <Link
                className="text-sm text-emerald-600 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListiningItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-emerald-800">
                Recent places for Rent
              </h2>
              <Link
                className="text-sm text-emerald-600 hover:underline"
                to={"/search?rent=true"}
              >
                Show more rentals
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListiningItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-emerald-800">
                Properties for Sale
              </h2>
              <Link
                className="text-sm text-emerald-600 hover:underline"
                to={"/search?sale=true"}
              >
                Show more properties
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListiningItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
