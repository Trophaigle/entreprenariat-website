import React from 'react';
import Card from '../cards/card';

function Values() {

const values = [
  { 
    title: "🎨 Creativity", 
    subtitle: "Creating unique orchestrations for each song",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    title: "🌟 Impact", 
    subtitle: "Conveying emotions and meaning in every performance",
    image: "https://images.unsplash.com/photo-1498673394965-85cb14905c89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    title: "🏆 Excellence", 
    subtitle: "Care and precision in every musical detail",
    image: "https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    title: "🔥 Boldness", 
    subtitle: "Daring surprising and innovative arrangements",
    image: "https://images.unsplash.com/photo-1495072667656-424d680e6299?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    title: "🎼 Aesthetics", 
    subtitle: "Harmony and authenticity to delight the ears",
    image: "https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    title: "🧭 Exploration", 
    subtitle: "Curiosity and openness towards Nordic songs and their culture",
    image: "https://images.unsplash.com/photo-1603623898218-0cb7f493309b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

  return (
    <div className=" bg-black p-8">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl mb-12 text-center">What I stand for</h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {values.map((value, index) => (
              <Card key={index} title={value.title} subtitle={value.subtitle} image={value.image}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;