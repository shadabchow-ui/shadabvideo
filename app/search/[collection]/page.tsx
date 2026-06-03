import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ collection: '_placeholder' }];
}

export default function CollectionPage() {
  return notFound();
}
