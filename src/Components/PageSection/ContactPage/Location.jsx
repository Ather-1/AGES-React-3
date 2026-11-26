const Map = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300 w-full">
      <iframe
        title="AGES Office Location"
        src="https://maps.google.com/maps?q=University+Town+Peshawar+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className="w-full h-72 md:h-80"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

export default Map
