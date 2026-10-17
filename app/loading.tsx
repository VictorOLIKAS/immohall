export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-white">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 
                          border-navy-100" />
          <div className="absolute inset-0 rounded-full border-4 
                          border-transparent border-t-orange-500 
                          animate-spin" />
          <div className="absolute inset-0 flex items-center 
                          justify-center">
            <div className="w-3 h-3 rounded-full bg-orange-500 
                            animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <p className="text-navy-900 font-bold text-lg">
          Immo<span className="text-orange-500">Hall</span>
        </p>
        <p className="text-navy-400 text-xs mt-2">
          Chargement en cours...
        </p>
      </div>
    </div>
  );
}