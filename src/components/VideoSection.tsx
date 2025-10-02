import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-primary to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-primary-foreground mb-12">
          Assista ao vídeo da campanha
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-primary rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="bg-background rounded-full w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-12 h-12 text-primary fill-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
