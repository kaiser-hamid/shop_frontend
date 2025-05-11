"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../cards/Product';

const products = [
    {
        name: 'Sample Bag 1',
        img: '/assets/images/bag/img-1.jpg',
        link: '#',
        price: 29,
        oldPrice: 39,
    },
    {
        name: 'Sample Bag 2',
        img: '/assets/images/bag/img-2.jpg',
        link: '#',
        price: 35,
        oldPrice: 45,
    },
    {
        name: 'Sample Bag 3',
        img: '/assets/images/bag/img-3.jpg',
        link: '#',
        price: 22,
        oldPrice: 30,
    },
    {
        name: 'Sample Bag 4',
        img: '/assets/images/bag/img-4.jpg',
        link: '#',
        price: 40,
        oldPrice: 50,
    },
    {
        name: 'Sample Bag 5',
        img: '/assets/images/bag/img-5.jpg',
        link: '#',
        price: 18,
        oldPrice: 25,
    },
    {
        name: 'Sample Gym 1',
        img: '/assets/images/gym/img-1.jpg',
        link: '#',
        price: 32,
        oldPrice: 40,
    },
    {
        name: 'Sample Gym 2',
        img: '/assets/images/gym/img-2.jpg',
        link: '#',
        price: 27,
        oldPrice: 35,
    },
    {
        name: 'Sample Gym 3',
        img: '/assets/images/gym/img-3.jpg',
        link: '#',
        price: 38,
        oldPrice: 48,
    },
];

export default function RelatedProducts() {
    return (
        <div>Related Products</div>
    );
}
