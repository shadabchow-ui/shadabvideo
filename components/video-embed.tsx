type VideoEmbedProps = {
  src: string;
  title: string;
};

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  return (
    <div className="overflow-hidden rounded-md bg-black shadow-md">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        className="aspect-video w-full"
      />
    </div>
  );
}
