// app/items/[id]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Product } from '@/app/types/Product'
import Link from 'next/link'

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)

  if (!res.ok) {
    return null
  }

  return res.json()
}

interface ProductPageProps {
  params: {
    id: string
  }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className='bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl'>
      <Image
        src={product.image}
        alt={product.title}
        width={600}
        height={500}
        className='w-full h-80 object-contain'
      />
      <div className='p-6 md:p-8'>
        <h3 className='text-2xl font-semibold mb-2'>{product.title}</h3>
        <p className='text-muted-foreground text-base mb-4'>
          {product.description}
        </p>
        <div className='flex items-center justify-between'>
          <div className='text-3xl font-bold'>${product.price}</div>
          <button className='w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm'>
            Add to Cart
          </button>
        </div>
        <div className='mt-6'>
          <h4 className='text-lg font-semibold mb-2'>Product Details</h4>
          <ul className='list-disc pl-6 text-muted-foreground'>
            <li>Crafted from high-quality materials, designed to last</li>
            <li> Visually pleasing and attractive design</li>
            <li>Consistent performance you can depend on</li>
            <li>Made with sustainable materials and eco-friendly processes</li>
          </ul>
        </div>
        <Link href='/items'>
          <button className='w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm'>
            Back to Items
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductPage
