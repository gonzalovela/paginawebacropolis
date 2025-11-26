import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MapDialogProps {
  isOpen: boolean;
  onClose: () => void;
  mapsUrl: string;
  sedeName: string;
}

export const MapDialog = ({ isOpen, onClose, mapsUrl, sedeName }: MapDialogProps) => {
  // Convert Google Maps URL to embeddable format
  const getEmbedUrl = (url: string) => {
    // If it's already an embed URL, return it
    if (url.includes('/embed')) {
      return url;
    }
    
    // Try to extract place ID or coordinates from the URL
    try {
      const urlObj = new URL(url);
      
      // Handle maps.app.goo.gl short URLs - just use as iframe src
      if (url.includes('maps.app.goo.gl') || url.includes('goo.gl')) {
        return url;
      }
      
      // Handle standard Google Maps URLs
      const placeMatch = url.match(/place\/([^/]+)/);
      if (placeMatch) {
        const placeName = placeMatch[1];
        return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(placeName)}`;
      }
      
      // Handle coordinate URLs
      const coordMatch = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
      if (coordMatch) {
        const [, lat, lng] = coordMatch;
        return `https://www.google.com/maps/embed/v1/view?key=&center=${lat},${lng}&zoom=15`;
      }
    } catch (e) {
      console.error('Error parsing maps URL:', e);
    }
    
    // Fallback: just use the URL directly in iframe
    return url;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold">
            Ubicación: {sedeName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="w-full h-[600px] relative">
          <iframe
            src={getEmbedUrl(mapsUrl)}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ${sedeName}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
