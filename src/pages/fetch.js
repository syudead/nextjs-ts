import Link from "next/link";

const Fetch = () => (
  <>
    <div>
      <ul>
        <li><Link href="/index" as="/"><a>home</a></Link></li>
        <li><Link href="/about"><a>about</a></Link></li>
      </ul>
    </div>
    <div>fetch</div>
  </>
);

export default Fetch;