import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
const ListiningItem = ({ listing }) => {
  return (
    <div className="bg-white border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl w-full sm:w-[330px] hover:-translate-y-1">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="lisiting cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="p-4 flex flex-col gap-2.5 w-full">
          <p className="text-lg font-semibold text-slate-800 truncate">
            {listing.name}
          </p>
          <div className="flex items-center gap-1.5">
            <MdLocationOn className="h-4 w-4 text-emerald-700" />
            <p className="truncate text-slate-600 text-sm w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-slate-600 line-clamp-2 leading-6">
            {listing.description}
          </p>
          <p className="text-emerald-700 mt-2 font-semibold text-lg">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            <span className="text-slate-500 text-sm font-medium">
              {listing.type === "rent" && " / month"}
            </span>
          </p>
          <div className="text-slate-700 flex gap-3 mt-1">
            <div className="font-semibold text-xs px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className="font-semibold text-xs px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              {listing.bedrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListiningItem;
