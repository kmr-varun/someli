import Image from "next/image";

interface ProfileCardProps {
  name: string;
  connections: string;
  avatar: string;
  alignment: "left" | "right";
}

export default function ProfileCard({
  name,
  connections,
  avatar,
  alignment,
}: ProfileCardProps) {
  if (alignment === "right") {
    return (
      <div className="flex items-center" style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.12))" }}>
        {/* Avatar */}
        <div className="relative shrink-0 w-[36px] h-[36px] lg:w-[49.58px] lg:h-[49.58px] lg:-mr-[18px] z-[2] rounded-full border-[1.22px] border-white overflow-hidden">
          <Image src={avatar} alt={name} fill className="object-cover" unoptimized />
        </div>
        {/* Card — desktop only */}
        <div
          className="hidden lg:flex bg-white flex-col items-start z-[1]"
          style={{
            width: '123.03px',
            height: '40.59px',
            paddingTop: '7.35px',
            paddingRight: '4.9px',
            paddingBottom: '7.35px',
            paddingLeft: '24.48px',
            borderTopRightRadius: '4.9px',
            borderBottomRightRadius: '4.9px',
            gap: '5.83px',
          }}
        >
          <p className="text-black" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '12.24px', lineHeight: '100%' }}>{name}</p>
          <p className="text-[#878787]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '8.57px', lineHeight: '100%' }}>{connections}</p>
        </div>
      </div>
    );
  }

  // alignment === "left" — card on left, avatar on right
  return (
    <div className="flex items-center" style={{ filter: "drop-shadow(4px 4px 4px rgba(0,0,0,0.12))" }}>
      {/* Card — desktop only */}
      <div
        className="hidden lg:flex bg-white flex-col items-start lg:-mr-[18px] z-[1]"
        style={{
          width: '123.03px',
          height: '40.59px',
          paddingTop: '7.35px',
          paddingRight: '24.48px',
          paddingBottom: '7.35px',
          paddingLeft: '4.9px',
          borderTopLeftRadius: '4.9px',
          borderBottomLeftRadius: '4.9px',
          gap: '5.83px',
        }}
      >
        <p className="text-black" style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '12.24px', lineHeight: '100%' }}>{name}</p>
        <p className="text-[#878787]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '8.57px', lineHeight: '100%' }}>{connections}</p>
      </div>
      {/* Avatar */}
      <div className="relative shrink-0 w-[36px] h-[36px] lg:w-[49.58px] lg:h-[49.58px] z-[2] rounded-full border-[1.22px] border-white overflow-hidden">
        <Image src={avatar} alt={name} fill className="object-cover" unoptimized />
      </div>
    </div>
  );
}
