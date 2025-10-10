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
    <Card key={offer.id} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card rounded-2xl">
      <CardContent className="p-0">
        <div className="aspect-square bg-gradient-to-br from-background to-muted relative p-3 flex items-center justify-center">
          <img
            src={offer.image}
            alt={offer.name}
            className="w-[80%] h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        <div className="p-3 md:p-4 space-y-2 text-center bg-card">
          <h3 className="font-bold text-xs md:text-sm leading-tight min-h-[2rem] md:min-h-[2.5rem] text-foreground line-clamp-2">
            {offer.name}
          </h3>
          {offer.price && (
            <p className="text-2xl md:text-3xl font-black text-primary">
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
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Ofertas Imperdíveis
          </h2>
          <p className="text-center text-muted-foreground">
            Confira as melhores ofertas da semana
          </p>
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
                        loop: false,
                      }}
                      className="w-full max-w-6xl mx-auto"
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {bhOffers.map((offer) => (
                          <CarouselItem key={offer.id} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 lg:basis-1/5">
                            {renderOfferCard(offer)}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
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
                        loop: false,
                      }}
                      className="w-full max-w-6xl mx-auto"
                    >
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {riodoceOffers.map((offer) => (
                          <CarouselItem key={offer.id} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 lg:basis-1/5">
                            {renderOfferCard(offer)}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
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
