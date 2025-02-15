export default function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params;
  return <div>My Post: {slug}</div>;
}