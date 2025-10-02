const BrandsSection = () => {
  const brands = Array(24).fill(null);
  
  return (
    <section className="py-16 bg-gradient-to-b from-primary to-primary/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-secondary mb-12">
          Confira as marcas participantes
        </h2>
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
          {brands.map((_, index) => (
            <div
              key={index}
              className="bg-background rounded-full w-20 h-20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <div className="w-12 h-12 bg-muted rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
