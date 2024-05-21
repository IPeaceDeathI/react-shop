import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo__img' src='/img/logo.svg' alt='Your Style Logo' />
  </Link>
)

export default Logo
