import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import videoThumbnail from "@/assets/video-thumbnail.webp";
import { useAdminContent } from "@/hooks/useAdminContent";

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { videoUrl } = useAdminContent();

  // Se não houver videoUrl configurado no ADMIN, não renderiza a seção
  if (!videoUrl) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-primary-foreground mb-12">
          Assista ao vídeo da campanha
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative aspect-video bg-primary rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            <img 
              src={videoThumbnail} 
              alt="Aniversário EPA - Meio Milhão" 
              className="w-full h-full object-contain"
              width={896}
              height={417}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="bg-background rounded-full w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-12 h-12 text-primary fill-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0">
          <DialogTitle className="sr-only">Vídeo da campanha EPA</DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-50 rounded-full bg-background/80 hover:bg-background"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar</span>
            </Button>
          </DialogClose>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl + "?autoplay=1"}
              title="Vídeo da campanha EPA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
