import Link from "next/link";
import { Fragment } from "react";

export const Page = () => (
    <Fragment>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/team">Team</Link></li>
        <li><Link href="/services-details">Services Details</Link></li>
        <li><Link href="/404-error">404 Page</Link></li>
    </Fragment>
);
export const Room = () => (
    <Fragment>
        <li><Link href="/room-details">Junior Suite</Link></li>
        <li><Link href="/room-details">Luxury room</Link></li>
        <li><Link href="/room-details">Small Suite</Link></li>
        <li><Link href="/room-details">Double Room</Link></li>
    </Fragment>
);
export const Blog = () => (
    <Fragment>
        <li><Link href="/blog-grid">Blog Grid</Link></li>
        <li><Link href="/blog-standard">Blog Standard</Link></li>
        <li><Link href="/blog-details/1">Blog Details</Link></li>
    </Fragment>
);
export const Hotels = () => (
    <Fragment>
        <li><Link href="/hotels/hestia-stay-kasana">Hestia Stay, Kasana</Link></li>
        <li><Link href="/hotels/hestia-hotel-knowledge-park-3">Hestia Hotel & Restaurant, Knowledge Park–3</Link></li>
        <li><Link href="#">The Hestia Hotel, Dwarka</Link></li>
        <li><Link href="#">The Hestia Hotel, Sector 132</Link></li>
        <li><Link href="#">Fifth Property – Coming Soon</Link></li>
    </Fragment>
);