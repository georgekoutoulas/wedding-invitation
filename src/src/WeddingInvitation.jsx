import React, { useEffect, useState } from 'react';

const scenes = [
  { id: 'img1', src: '/1000102514.png', alt: 'Χέρι με κινητό και Like' },
  { id: 'img2', src: '/paper_plane_final.png', alt: 'Χάρτινο αεροπλανάκι' },
  { id: 'img3', src: '/girl_heart_final.png', alt: 'Κοπέλα με καρδιά' },
];

export default function WeddingInvitation() {
  const [visibleScenes, setVisibleScenes] = useState([]);

  useEffect(() => {
    const revealScenes = async () => {
      for (let i = 0; i < scenes.length; i++) {
        setVisibleScenes((prev) => [...prev, scenes[i].id]);
        await new Promise((r) => setTimeout(r, 2000));
      }
      const content = document.getElementById('content');
      if (content) {
        content.scrollIntoView({ behavior: 'smooth' });
      }
    };
    revealScenes();
  }, []);

  return (
    <div className="w-full bg-white font-hand">
      {scenes.map((scene) => (
        <div
          key={scene.id}
          className="min-h-screen flex justify-center items-center"
        >
          <img
            src={scene.src}
            alt={scene.alt}
            className={`max-w-[90%] h-auto transition-opacity duration-1000 ${
              visibleScenes.includes(scene.id) ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      ))}

      <div
        id="content"
        className="max-w-xl mx-auto p-6 bg-white border-t-4 border-dotted border-pink-400"
      >
        <h2 className="text-2xl text-center mb-4">Με χαρά σας προσκαλούμε στον γάμο μας!</h2>
        <p className="text-center mb-4">
          Το Σάββατο 12 Ιουλίου στις 18:00 στον Ιερό Ναό Αγίου Δημητρίου.
        </p>
        <h3 className="font-semibold mt-4">Γονείς</h3>
        <p>Γιώργος & Μαρία | Κώστας & Ελένη</p>
        <h3 className="font-semibold mt-4">Κουμπάροι</h3>
        <p>Νίκος & Άννα</p>

        <h3 className="font-semibold mt-4">Τοποθεσία</h3>
        <iframe
          src="https://maps.app.goo.gl/haS4nGSSTvuDGkkg7"
          className="w-full h-72 border-none"
          title="Χάρτης τοποθεσίας"
        ></iframe>

        <h3 className="font-semibold mt-4">Συμμετοχή</h3>
        <form
          action="https://forms.gle/p8QiHzQNnDroN1LV8"
          method="GET"
          target="_blank"
          className="space-y-4"
        >
          <input
            type="text"
            name="entry.1"
            placeholder="Όνομα"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="entry.2"
            placeholder="Επώνυμο"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            name="entry.3"
            placeholder="Τηλέφωνο"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-pink-400 text-white py-2 rounded"
          >
            Υποβολή
          </button>
        </form>
      </div>
    </div>
  );
}
