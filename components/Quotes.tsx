import React from 'react';

const Quotes = () => {
  const quotes = [
    {
      text: "A book is a dream you hold in your hands.",
      author: "Neil Gaiman",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kyle-cassidy-neil-gaiman-April-2013.jpg/220px-Kyle-cassidy-neil-gaiman-April-2013.jpg"
    },
    {
      text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      author: "Dr. Seuss",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Theodor_Seuss_Geisel_%2801037v%29.jpg/220px-Theodor_Seuss_Geisel_%2801037v%29.jpg"
    },
    {
      text: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg/220px-Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg"
    },
    {
      text: "The reading of all good books is like a conversation with the finest minds of past centuries.",
      author: "René Descartes",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*2EnUV6fL30pf05Di5nlKfA.png"
    }
  ];

  return (
    <div className="my-10 mt-[100px] w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] lg:w-[70%] lg:mx-[15%]">
      <h2 className="text-2xl font-bold mb-6 text-mainColor">Get inspired...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className=" shadow-md rounded-md overflow-hidden flex items-center"
          >
            <div className="w-1/3">
              <img
                src={quote.image}
                alt={`Quote by ${quote.author}`}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
            </div>
            <div className="p-6 w-2/3">
              <p className="text-lg font-medium mb-2">{quote.text}</p>
              <p className="text-gray-500 text-sm">- {quote.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;