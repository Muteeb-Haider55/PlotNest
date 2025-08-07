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
      <div className="relative bg-white overflow-hidden">
        {/* Background gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 opacity-95"></div>

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text content */}
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-emerald-800">Discover Your</span>
                <span className="block text-emerald-600">Perfect Property</span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                PlotNest connects you with the finest properties across the
                country. Whether you're buying, renting, or just browsing, we
                make real estate simple.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/search"
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center"
                >
                  Explore Listings
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3.5 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-lg transition-all duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image placeholder - replace with actual property image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-300 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Beautiful home"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <div className="bg-emerald-50 p-4">
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
