import { getContentForHero } from "@/content/queries";

export default async function HeroTest() {
  const data = await getContentForHero();
  const content = data.heroCollection.items[0];

  return (
    <div>
      <p>sup! This is the hero test from contentful</p>
      <p>pretitle: {content.preTitle} </p>
      <p>title: {content.title}</p>
    </div>
  );
}
