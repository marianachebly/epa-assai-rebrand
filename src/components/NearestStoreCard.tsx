import { useState, useEffect } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { stores, Store } from "@/data/stores";
import { getUserLocation, calculateDistance } from "@/lib/geolocation";
import izaImage from "@/assets/iza-chat-button.webp";

const NearestStoreCard = () => {
  const [nearestStore, setNearestStore] = useState<Store | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findNearestStore = async () => {
      try {
        const location = await getUserLocation();

        // Find the nearest store with coordinates
        const storesWithDistances = stores
          .filter(store => store.coordinates)
          .map(store => ({
            store,
            distance: calculateDistance(location, store.coordinates!),
          }))
          .sort((a, b) => a.distance - b.distance);

        if (storesWithDistances.length > 0) {
          setNearestStore(storesWithDistances[0].store);
        }
      } catch (err) {
        console.error("Não foi possível obter localização:", err);
        // Even if location fails, show a default store
        if (stores.length > 0 && stores[0].coordinates) {
          setNearestStore(stores[0]);
        }
      } finally {
        setLoading(false);
      }
    };

    findNearestStore();
  }, []);

  if (loading || !nearestStore) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden bg-gradient-to-r from-secondary via-primary to-secondary border-2 border-primary shadow-2xl">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
            {/* Iza Image */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse"></div>
                <img
                  src={izaImage}
                  alt="Iza"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Ei, Vizinho! 👋
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2 text-white">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-bold">
                    Sua loja mais próxima é a{" "}
                    <span className="text-yellow-300">{nearestStore.name}</span>
                  </p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-white font-semibold leading-relaxed">
                Corre lá e aproveite as ofertas! E claro, digite seu CPF e concorra a vales-compra de{" "}
                <span className="text-yellow-300 font-black text-xl">R$ 1.000,00</span>!
              </p>

              <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                <ArrowRight className="w-6 h-6 text-yellow-300 animate-bounce" style={{ animationDirection: "alternate" }} />
                <p className="text-sm text-white/90 font-medium">
                  📍 {nearestStore.address}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NearestStoreCard;
