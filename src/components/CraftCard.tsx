interface CraftCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

const CraftCard = ({ title, description, image, badge }: CraftCardProps) => {
  return (
    <div className="craft-card group">
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="p-6 space-y-2">
        <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default CraftCard;
