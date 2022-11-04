import Link from 'next/link';
const Page = () => {
  return (
    <div>
      <div>문제 풀기</div>
      <div>문제는 1,2번 문제 2개 입니다.</div>
      <Link href="/problem/1">풀기 시작</Link>
    </div>
  );
};
export default Page;
