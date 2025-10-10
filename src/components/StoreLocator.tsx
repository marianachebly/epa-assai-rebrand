import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone } from "lucide-react";
import { getCities, getNeighborhoodsByCity, getStoresByCityAndNeighborhood, Store } from "@/data/stores";

const StoreLocator = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>("");
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const cities = getCities();
  const neighborhoods = selectedCity ? getNeighborhoodsByCity(selectedCity) : [];

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedNeighborhood("");
    setSelectedStore(null);
  };

  const handleNeighborhoodChange = (neighborhood: string) => {
    setSelectedNeighborhood(neighborhood);
    const stores = getStoresByCityAndNeighborhood(selectedCity, neighborhood);
    setSelectedStore(stores[0] || null);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Link to="/regulamento">
            <Button variant="secondary" size="lg" className="gap-2">
              CONFIRA AQUI O REGULAMENTO DA PROMOÇÃO
              <span className="text-2xl">→</span>
            </Button>
          </Link>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-center text-secondary mb-12">
          Confira a Loja EPA mais próxima de você!
        </h2>
        
        <div className="max-w-4xl mx-auto bg-background rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="cidade">Sua cidade</Label>
                <Select value={selectedCity} onValueChange={handleCityChange}>
                  <SelectTrigger id="cidade">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="bairro">Seu bairro</Label>
                <Select 
                  value={selectedNeighborhood} 
                  onValueChange={handleNeighborhoodChange}
                  disabled={!selectedCity}
                >
                  <SelectTrigger id="bairro">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {neighborhoods.map((neighborhood) => (
                      <SelectItem key={neighborhood} value={neighborhood}>
                        {neighborhood}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="bg-muted rounded-2xl p-6 flex items-center justify-center">
              {selectedStore ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">{selectedStore.name}</p>
                      <p className="text-sm text-muted-foreground">{selectedStore.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm font-semibold text-foreground">{selectedStore.phone}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <p className="text-muted-foreground font-semibold">
                    Selecione a cidade e bairro<br />para ver a loja
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
