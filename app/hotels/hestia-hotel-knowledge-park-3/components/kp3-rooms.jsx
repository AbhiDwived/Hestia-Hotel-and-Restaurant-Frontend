import roomStyleAllBlogs from "@/components/data/room-style-all-blogs";
import Image from "next/image";
import Link from "next/link";

const KP3Rooms = () => {
    // Filter for Deluxe Room and Superior Room (as Super Deluxe)
    const deluxeRooms = roomStyleAllBlogs.filter((item) => item.title === "Deluxe Room");
    const superDeluxeRooms = roomStyleAllBlogs.filter((item) => item.title === "Superior Room");

    // Combine and display both types
    const allRooms = [...deluxeRooms, ...superDeluxeRooms];

    return (
        <div className="deluxe__two section-padding" id="rooms">
            <div className="container">
                <div className="row align-items-end mb-30">
                    <div className="col-xl-6 col-md-8">
                        <div className="deluxe__two-title md-mb-40">
                            <span className="subtitle__one">Accommodation</span>
                            <h2>Total 36 Rooms</h2>
                            <p>27 Deluxe Rooms & 9 Super Deluxe Rooms</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {allRooms.map((item, index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 mt-30">
                            <div className="deluxe__two-item">
                                <div className="deluxe__two-item-image">
                                    <Link href="/room-details">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={500}
                                            height={250}
                                            style={{ height: '250px !important' }}
                                        />
                                    </Link>
                                </div>
                                <div className="deluxe__two-item-content">
                                    <span>₹{item.price}/Night</span>
                                    <h4>
                                        <Link href="/room-details">
                                            {item.title === "Superior Room" ? "Super Deluxe Room" : item.title}
                                        </Link>
                                    </h4>
                                    <p>{item.des}</p>
                                    <div className="deluxe__two-item-content-meta">
                                        <ul>
                                            <li>
                                                <i className="fal fa-bed-alt"></i> ({item.bed}) bed's
                                            </li>
                                            <li>
                                                <i className="fal fa-users"></i> ({item.guest}) Guest's
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="deluxe__two-item-content-bottom">
                                        <Link className="simple-btn" href="/room-details">
                                            <i className="far fa-chevron-right"></i> Read More
                                        </Link>
                                        <p>
                                            <i className="fas fa-star"></i>
                                            <span>{item.star}</span>2k
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KP3Rooms;
