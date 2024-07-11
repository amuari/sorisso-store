// app/page.tsx
import Image from 'next/image'
import { Product } from '../types/Product'
import Link from 'next/link'

async function getData(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async () => {
  const data = await getData()

  return (
    <div className='px-10 py-32 sm:grid grid-rows-1-1 gap-4  md: grid-cols-2 '>
      {data.map((product) => (
        <div
          className='bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 w-full max-w-sm '
          key={product.id}
        >
          <Link href={`/items/${product.id}`}>
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={400}
              className='w-full h-64 object-contain'
            />
            <div className='p-7 space-y-10 bg-slate-200'>
              <h3 className='text-xl font-semibold'>{product.title}</h3>
              <p className='text-muted-foreground'>{product.description}</p>
              <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold'>${product.price}</span>
                {/* <span className='text-2xl font-bold'>{product.rating}</span> */}
                <button className='block -translate-x-1 -translate-y-1 text-white rounded-lg border-2 border-[#222222] bg-[#000] px-4 py-1 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0'>
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Page
