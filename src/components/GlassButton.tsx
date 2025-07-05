type GlassButtonProps = {
  icon: React.ReactNode;
  label: string;
};

export default function GlassButton({ icon, label }: GlassButtonProps) {
  return (
   <div className="glass-button flex flex-col items-center justify-center gap-0 w-25 h-25 text-sm bg-transparent shadow-none">
      <div className="text-3xl">{icon}</div>
      <div className="text-center font-medium text-white">{label}</div>
    </div>
  );
}
