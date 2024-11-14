import Image from 'next/image';

const cardData = [
  {
    image: '/myImage/card1.png', // Unique image path for each card
    text: 'Currency Converter',
    link: 'https://currency-converter-kappa-black.vercel.app/'
  },
  {
    image: '/myImage/card2.png',
    text: 'Project Two: Consectetur adipiscing elit.',
    link: 'https://tic-tac-toe-game-nine-coral.vercel.app/'
  },
  {
    image: '/myImage/card3.png',
    text: 'Project Three: Sed do eiusmod tempor.',
    link:'https://third-assignment-murex.vercel.app/'
  },
  {
    image: '/myImage/card4.png',
    text: 'Panacloud Website.',
    link: 'https://panacloud-website-jet.vercel.app/'
  },
  {
    image: '/myImage/card5.png',
    text: 'Resume Builder',
    text2: 'Coming Soon!'

  },
  {
    image: '/myImage/card6.png',
    text: 'Mobile Responsive Website.',
    text2: 'Coming Soon!'
  },
];

const PortfolioSection = () => {
  return (
    <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
      {cardData.map((card, index) => (
        <div className="flex flex-col" key={index}>
          <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
            <Image
              src={card.image} // Using unique image for each card
              alt={`Project ${index + 1}`}
              width={500}
              height={500}
              className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
            />
          </div>

          <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-xl text-[#d8e5fb] hover:underline"
            >
              {card.text}
            </a>
            
            {card.text2 && (
            <p className="mt-2 text-sm text-[#d8e5fb]">{card.text2}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;
