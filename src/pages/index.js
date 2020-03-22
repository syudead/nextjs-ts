import Link from 'next/link';
//import style from '../css/style.scss';

const Home = () => (
  <>
    <div><Link href="/about"><a>about</a></Link></div>
    <div className="example2">This is Home da!</div>

    <style jsx>{`
      .example2 {
        font-size: 100px;
      }
    `}</style>
  </>
);

export default Home
