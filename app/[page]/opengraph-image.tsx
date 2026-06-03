import OpengraphImage from 'components/opengraph-image';
import { ImageResponse } from 'next/og';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ page: '_placeholder' }];
}

export default async function Image(): Promise<ImageResponse> {
  return OpengraphImage();
}
