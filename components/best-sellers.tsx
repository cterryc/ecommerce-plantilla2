import Link from 'next/link'
import ProductCard from './product-card'
import { ArrowBigRight } from 'lucide-react'

const bestSellers = [
  {
    id: 5,
    name: 'Everyday Silver',
    price: 119.99,
    image: '/t-shirt5.png',
    category: 'Satchel'
  },
  {
    id: 6,
    name: 'Evening Azul Marino',
    price: 69.99,
    image: '/t-shirt6.png',
    category: 'Clutch'
  },
  {
    id: 7,
    name: 'Work Fucsia',
    price: 149.99,
    image: '/t-shirt7.png',
    category: 'Tote'
  },
  {
    id: 8,
    name: 'Weekend Azul',
    price: 179.99,
    image: '/t-shirt8.png',
    category: 'Duffel'
  },
  {
    id: 9,
    name: 'Evening Azul',
    price: 69.99,
    image: '/t-shirt9.png',
    category: 'Clutch'
  },
  {
    id: 10,
    name: 'Work Crema',
    price: 149.99,
    image: '/t-shirt10.png',
    category: 'Tote'
  }
]

export default function BestSellers() {
  return (
    <section className='py-12'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Los más vendidos
        </h2>
        <Link
          href={'collection'}
          className='flex items-center text-slate-800 hover:text-blue-800'
        >
          {' '}
          Ver coleccion <ArrowBigRight />
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
