import Image from "next/image";

type PhotoFrameProps = {
  label: string;
  src?: string;
  videoSrc?: string;
  mediaPosition?: string;
  aspect?: "square" | "tall" | "wide" | "box";
  /** Custom CSS aspect-ratio (e.g. "1660 / 1370"); overrides the aspect preset */
  aspectRatio?: string;
  dark?: boolean;
  className?: string;
};

const aspectClass = {
  square: "aspect-[4/3]",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  box: "aspect-square",
};

export default function PhotoFrame({
  label,
  src,
  videoSrc,
  mediaPosition,
  aspect = "square",
  aspectRatio,
  dark = false,
  className = "",
}: PhotoFrameProps) {
  return (
    <div
      style={aspectRatio ? { aspectRatio } : undefined}
      className={`relative flex items-center justify-center overflow-hidden border-[1.5px] p-5 text-center ${
        aspectClass[aspect]
      } ${
        dark
          ? "border-[#3A3F48] bg-[repeating-linear-gradient(45deg,#20242C,#20242C_10px,#262A33_10px,#262A33_20px)]"
          : "border-ink bg-[repeating-linear-gradient(45deg,#E4E1D8,#E4E1D8_10px,#ECE9E1_10px,#ECE9E1_20px)]"
      } ${className}`}
    >
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={src}
          autoPlay
          muted
          loop
          playsInline
          title={label}
          className="absolute inset-0 h-full w-full object-cover"
          style={mediaPosition ? { objectPosition: mediaPosition } : undefined}
        />
      ) : src?.endsWith(".svg") ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover"
        />
      ) : (
        <span
          className={`max-w-[90%] border border-dashed px-2.5 py-1.5 font-mono text-xs ${
            dark
              ? "border-[#4A4F58] bg-[#1A1E25] text-[#7A7F88]"
              : "border-steel bg-paper text-steel"
          }`}
        >
          [ PHOTO: {label} ]
        </span>
      )}
    </div>
  );
}
