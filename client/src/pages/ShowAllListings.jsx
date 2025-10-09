import React, { useEffect, useState } from "react";
import ListiningItem from "../components/ListiningItem.jsx";
import Loader from "../components/Loader.jsx";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ShowAllListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const limit = 12;

  const fetchListings = async (reset = false) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${API_BASE_URL}/api/listing/get?limit=${limit}&startIndex=${
          reset ? 0 : startIndex
        }`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load listings");
      setListings((prev) => (reset ? data : [...prev, ...data]));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = async () => {
    setStartIndex((prev) => prev + limit);
    try {
      setLoading(true);
      const res = await fetch(
        `${API_BASE_URL}/api/listing/get?limit=${limit}&startIndex=${
          startIndex + limit
        }`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load listings");
      setListings((prev) => [...prev, ...data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="p-4 max-w-6xl mx-auto pt-10">
          <h1 className="text-2xl font-bold mb-4">All Listings</h1>
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListiningItem key={listing._id} listing={listing} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMore}
              disabled={loading}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg disabled:opacity-60"
            >
              {loading ? "Loading" : "Load more"}
            </button>
          </div>
        </main>
      )}
    </>
  );
};

export default ShowAllListings;
