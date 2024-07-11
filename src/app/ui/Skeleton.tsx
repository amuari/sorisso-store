export default function Component() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='animate-pulse space-y-2'>
        <div className='h-6 w-32 rounded-md bg-muted' />
        <div className='h-4 w-full rounded-md bg-muted' />
        <div className='h-4 w-3/4 rounded-md bg-muted' />
      </div>
      <div className='animate-pulse space-y-2'>
        <div className='h-6 w-32 rounded-md bg-muted' />
        <div className='h-4 w-full rounded-md bg-muted' />
        <div className='h-4 w-3/4 rounded-md bg-muted' />
      </div>
      <div className='animate-pulse space-y-2'>
        <div className='h-6 w-32 rounded-md bg-muted' />
        <div className='h-4 w-full rounded-md bg-muted' />
        <div className='h-4 w-3/4 rounded-md bg-muted' />
      </div>
    </div>
  )
}
