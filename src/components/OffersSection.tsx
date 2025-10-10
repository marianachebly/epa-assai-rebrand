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

interface Offer {
  id: number;
  name: string;
  image: string;
  price?: number;
  old_price?: number;
  description?: string;
  discount?: string;
}

const API_ENDPOINTS = {
  riodoce: "https://adm.epa.com.br/api/v1/4/top-offers",
  belohorizonte: "https://adm.epa.com.br/api/v1/2/top-offers",
};

const OffersSection = () => {
  const [riodoceOffers, setRiodoceOffers] = useState<Offer[]>([]);
  const [bhOffers, setBhOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("belohorizonte");

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    setLoading(true);
    try {
      const [riodoceResponse, bhResponse] = await Promise.all([
        fetch(API_ENDPOINTS.riodoce),
        fetch(API_ENDPOINTS.belohorizonte),
      ]);

      if (riodoceResponse.ok) {
        const riodoceData = await riodoceResponse.json();
        setRiodoceOffers(Array.isArray(riodoceData) ? riodoceData : riodoceData.data || []);
      }

      if (bhResponse.ok) {
        const bhData = await bhResponse.json();
        setBhOffers(Array.isArray(bhData) ? bhData : bhData.data || []);
      }
    } catch (error) {
      console.error("Erro ao carregar ofertas:", error);
      toast.error("Erro ao carregar ofertas");
    } finally {
      setLoading(false);
    }
  };

  const renderOfferCard = (offer: Offer) => (
    <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-square bg-muted relative">
          <img
            src={offer.image}
            alt={offer.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
          {offer.discount && (
            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
              {offer.discount}
            </div>
          )}
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-bold text-lg line-clamp-2 min-h-[3.5rem]">{offer.name}</h3>
          {offer.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{offer.description}</p>
          )}
          <div className="flex items-center gap-2">
            {offer.old_price && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {offer.old_price.toFixed(2)}
              </span>
            )}
            {offer.price && (
              <span className="text-2xl font-black text-primary">
                R$ {offer.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const currentOffers = activeTab === "riodoce" ? riodoceOffers : bhOffers;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          Ofertas Imperdíveis
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Confira as melhores ofertas da semana
        </p>

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
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full max-w-7xl mx-auto px-12"
                  >
                    <CarouselContent>
                      {bhOffers.map((offer) => (
                        <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-1/4">
                          {renderOfferCard(offer)}
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    Nenhuma oferta disponível no momento
                  </div>
                )}
              </TabsContent>

              <TabsContent value="riodoce">
                {riodoceOffers.length > 0 ? (
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full max-w-7xl mx-auto px-12"
                  >
                    <CarouselContent>
                      {riodoceOffers.map((offer) => (
                        <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-1/4">
                          {renderOfferCard(offer)}
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
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
