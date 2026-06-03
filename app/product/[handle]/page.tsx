import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ handle: '_placeholder' }];
}

export default function ProductPage() {
  return notFound();
}
