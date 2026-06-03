import { notFound } from 'next/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ page: '_placeholder' }];
}

export default function DynamicPage() {
  return notFound();
}
