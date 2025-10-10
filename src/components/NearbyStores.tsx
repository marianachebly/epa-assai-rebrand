import { useState, useEffect } from "react";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { stores, Store } from "@/data/stores";
import { getUserLocation, calculateDistance, formatDistance, Coordinates } from "@/lib/geolocation";
import { Skeleton } from "@/components/ui/skeleton";

interface StoreWithDistance extends Store {
  distance: number;
}

const NearbyStores = () => {
  const [nearbyStores, setNearbyStores] = useState<StoreWithDistance[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);

  const findNearbyStores = async () => {
    setLoading(true);
    setError(null);

    try {
      const location = await getUserLocation();
      setUserLocation(location);

      // Filter stores with coordinates and calculate distances
      const storesWithDistances: StoreWithDistance[] = stores
        .filter(store => store.coordinates) // Only stores with coordinates
        .map(store => ({
          ...store,
          distance: calculateDistance(location, store.coordinates!),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3); // Get top 3 closest stores

      setNearbyStores(storesWithDistances);
    } catch (err) {
      setError("Não foi possível obter sua localização. Por favor, permita o acesso à localização.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Auto-detect location on mount
    findNearbyStores();
  }, []);

  if (error) {
    return (
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-4">{error}</p>
          <Button onClick={findNearbyStores} variant="outline" className="gap-2">
            <Navigation className="w-4 h-4" />
            Tentar Novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Navigation className="w-5 h-5 text-primary animate-pulse" />
            <h3 className="font-bold text-lg">Buscando lojas próximas...</h3>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (nearbyStores.length === 0) {
    return null;
  }

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary" />
            <h3 className="font-black text-lg text-foreground">Lojas EPA mais próximas de você</h3>
          </div>
          <Button onClick={findNearbyStores} variant="ghost" size="sm" className="gap-2">
            <Navigation className="w-4 h-4" />
            Atualizar
          </Button>
        </div>
        
        <div className="space-y-3">
          {nearbyStores.map((store, index) => (
            <Card key={index} className="bg-background hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">{store.name}</p>
                        <p className="text-sm text-muted-foreground">{store.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-7">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <p className="text-sm font-semibold text-foreground">{store.phone}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-primary/10 px-3 py-1.5 rounded-full">
                      <p className="text-sm font-black text-primary">{formatDistance(store.distance)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NearbyStores;
