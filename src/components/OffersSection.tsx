import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { stores, Store } from "@/data/stores";
import { getUserLocation, calculateDistance } from "@/lib/geolocation";
import izaLojaImage from "@/assets/iza-loja.png";

interface Offer {
  id: number;
  name: string;
  image: string;
  price?: number;
  old_price?: number;
  description?: string;
  discount?: string;
}

interface OffersResponse {
  expires: string;
  region_id: number;
  data: Offer[];
}

const API_ENDPOINTS = {
  riodoce: "https://adm.epa.com.br/api/v1/4/top-offers",
  belohorizonte: "https://adm.epa.com.br/api/v1/2/top-offers",
};

const OffersSection = () => {
  const [riodoceOffers, setRiodoceOffers] = useState<Offer[]>([]);
  const [bhOffers, setBhOffers] = useState<Offer[]>([]);
  const [riodoceExpires, setRiodoceExpires] = useState<string>("");
  const [bhExpires, setBhExpires] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("belohorizonte");
  const [nearestStore, setNearestStore] = useState<Store | null>(null);

  useEffect(() => {
    fetchOffers();
    findNearestStore();
  }, []);

  const findNearestStore = async () => {
    try {
      const location = await getUserLocation();
      console.log("📍 Localização do usuário:", location);
      
      const storesWithDistances = stores
        .filter(store => store.coordinates)
        .map(store => ({
          store,
          distance: calculateDistance(location, store.coordinates!),
        }))
        .sort((a, b) => a.distance - b.distance);

      console.log("🏪 Top 5 lojas mais próximas:");
      storesWithDistances.slice(0, 5).forEach((item, index) => {
        console.log(`${index + 1}. ${item.store.name} - ${item.distance.toFixed(2)}km`);
        console.log(`   Coordenadas: ${item.store.coordinates?.latitude}, ${item.store.coordinates?.longitude}`);
      });

      if (storesWithDistances.length > 0) {
        setNearestStore(storesWithDistances[0].store);
        console.log("✅ Loja selecionada:", storesWithDistances[0].store.name);
      }
    } catch (err) {
      console.error("❌ Erro ao obter localização:", err);
      // Don't show any store if location fails
      setNearestStore(null);
    }
  };

  const fetchOffers = async () => {
    setLoading(true);
    try {
      const [riodoceResponse, bhResponse] = await Promise.all([
        fetch(API_ENDPOINTS.riodoce),
        fetch(API_ENDPOINTS.belohorizonte),
      ]);

      if (riodoceResponse.ok) {
        const riodoceData: OffersResponse = await riodoceResponse.json();
        setRiodoceOffers(Array.isArray(riodoceData) ? riodoceData : riodoceData.data || []);
        setRiodoceExpires(riodoceData.expires || "");
      }

      if (bhResponse.ok) {
        const bhData: OffersResponse = await bhResponse.json();
        setBhOffers(Array.isArray(bhData) ? bhData : bhData.data || []);
        setBhExpires(bhData.expires || "");
      }
    } catch (error) {
      console.error("Erro ao carregar ofertas:", error);
      toast.error("Erro ao carregar ofertas");
    } finally {
      setLoading(false);
    }
  };

  const formatExpiryDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
  };

  const renderOfferCard = (offer: Offer) => (
    <Card key={offer.id} className="group overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card">
      <CardContent className="p-0">
        <div className="aspect-square bg-background relative p-4 flex items-center justify-center">
          <img
            src={offer.image}
            alt={offer.name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        <div className="p-3 md:p-4 space-y-2 md:space-y-3 text-center">
          <h3 className="font-semibold text-xs md:text-sm leading-tight min-h-[2rem] md:min-h-[2.5rem] text-foreground line-clamp-2">
            {offer.name}
          </h3>
          {offer.price && (
            <p className="text-xl md:text-2xl font-black text-foreground">
              R$ {offer.price.toFixed(2)}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const currentOffers = activeTab === "riodoce" ? riodoceOffers : bhOffers;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black text-center md:text-left mb-4">
              Ofertas Imperdíveis
            </h2>
            <p className="text-center md:text-left text-muted-foreground">
              Confira as melhores ofertas da semana
            </p>
          </div>
          
          {nearestStore && (
            <div className="relative flex-shrink-0">
              <img 
                src={izaLojaImage} 
                alt="Iza" 
                className="w-full max-w-[400px] h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center md:justify-end pr-4 md:pr-12">
                <div className="text-center md:text-left max-w-[220px]">
                  <p className="text-base md:text-lg font-bold text-foreground leading-tight">
                    Ei, Vizinho!
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-foreground mt-1">
                    Sua loja mais próxima é a:
                  </p>
                  <p className="text-sm md:text-base font-black text-primary mt-1 leading-tight">
                    {nearestStore.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {nearestStore.address}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <Tabs defaultValue="belohorizonte" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="belohorizonte">Belo Horizonte e Região</TabsTrigger>
            <TabsTrigger value="riodoce">Rio Doce e Mucuri</TabsTrigger>
          </TabsList>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
              <TabsContent value="belohorizonte">
                {bhOffers.length > 0 ? (
                  <div className="space-y-4">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full max-w-6xl mx-auto px-12"
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {bhOffers.map((offer) => (
                           <CarouselItem key={offer.id} className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/5">
                            {renderOfferCard(offer)}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0" />
                      <CarouselNext className="right-0" />
                    </Carousel>
                    {bhExpires && (
                      <p className="text-center text-sm text-muted-foreground mt-4">
                        Válidas até dia {formatExpiryDate(bhExpires)}, na REDE EPA DE BELO HORIZONTE E REGIÃO (Exceto EPA Premium).
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    Nenhuma oferta disponível no momento
                  </div>
                )}
              </TabsContent>

              <TabsContent value="riodoce">
                {riodoceOffers.length > 0 ? (
                  <div className="space-y-4">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full max-w-6xl mx-auto px-12"
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {riodoceOffers.map((offer) => (
                          <CarouselItem key={offer.id} className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/5">
                            {renderOfferCard(offer)}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0" />
                      <CarouselNext className="right-0" />
                    </Carousel>
                    {riodoceExpires && (
                      <p className="text-center text-sm text-muted-foreground mt-4">
                        Válidas até dia {formatExpiryDate(riodoceExpires)}, na REDE EPA DE RIO DOCE E MUCURI (Exceto EPA Premium).
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    Nenhuma oferta disponível no momento
                  </div>
                )}
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default OffersSection;
