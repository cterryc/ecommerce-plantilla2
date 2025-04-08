'use client'

import { useState } from 'react'
import ProductCard from '@/components/product-card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

const products = [
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
  },
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
  },
  {
    id: 11,
    name: 'Weekend Azul Oscuro',
    price: 179.99,
    image: '/t-shirt11.png',
    category: 'Duffel'
  }
]

export default function Collection() {
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('name')

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(filter.toLowerCase()) ||
        product.category.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name)
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return 0
    })

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Our Collection</h1>
      <div className='flex flex-col md:flex-row gap-4 mb-8'>
        <Input
          type='text'
          placeholder='Search products...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='md:w-64'
        />
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className='md:w-48'>
            <SelectValue placeholder='Sort by' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='name'>Name</SelectItem>
            <SelectItem value='price-asc'>Price: Low to High</SelectItem>
            <SelectItem value='price-desc'>Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
