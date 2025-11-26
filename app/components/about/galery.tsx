import React from 'react'

function Galery () {
    const galleryItems = [
  {
    title: "Partition orchestrale",
    image: "https://images.unsplash.com/photo-1604022607020-25b5a47b87c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    description: "Exemple d'orchestration pour choeur nordique et petit ensemble instrumental"
  },
  {
    title: "Arrangement piano",
    image: "https://images.unsplash.com/photo-1580740656596-25a3d0e4269d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    description: "Arrangement clavier d’un chant traditionnel suédois"
  },
  {
    title: "Sketch sur papier",
    image: "https://images.unsplash.com/photo-1529933032194-f5c3e057b204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    description: "Esquisse initiale réalisée à la main avant transcription digitale"
  },
];
  return (
    <section className="py-16 px-6 bg-black">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-white">Exemples de réalisations</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover"/>
            <div className="p-6 bg-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Galery
