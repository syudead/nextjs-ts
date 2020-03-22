import Link from 'next/link';
export default () => (
  <div>
    <ul>
      <li><Link href="/"><a>home</a></Link></li>
      <li><Link href="/fetch"><a>about</a></Link></li>
      <li><Link href="/about"><a>about</a></Link></li>
    </ul>
  </div>
);