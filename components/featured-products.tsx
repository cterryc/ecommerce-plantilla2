import Link from 'next/link'
import ProductCard from './product-card'
import { ArrowBigRight } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'Classic Fucsia',
    price: 129.99,
    image: '/t-shirt1.png',
    category: 'Tote'
  },
  {
    id: 2,
    name: 'Elegant Blanco',
    price: 79.99,
    image: '/t-shirt2.png',
    category: 'Clutch'
  },
  {
    id: 3,
    name: 'Shoulder Negro',
    price: 159.99,
    image: '/t-shirt3.png',
    category: 'Shoulder'
  },
  {
    id: 4,
    name: 'Mini Cross Crema',
    price: 89.99,
    image: '/t-shirt4.png',
    category: 'Crossbody'
  }
]

export default function FeaturedProducts() {
  return (
    <section className='py-12'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Productos destacados
        </h2>
        <Link
          href={'collection'}
          className='flex items-center text-slate-800 hover:text-blue-800'
        >
          {' '}
          Ver coleccion <ArrowBigRight />
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
