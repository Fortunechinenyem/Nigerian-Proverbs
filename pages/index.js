import { useState } from "react";
import { FaHeart, FaShareAlt, FaMoon, FaSun } from "react-icons/fa";

const proverbs = [
  {
    id: 1,
    text: "A child who is not embraced by the village will burn it down to feel its warmth.",
    category: "wisdom",
  },
  {
    id: 2,
    text: "The lizard that jumped from the high iroko tree to the ground said he would praise himself if no one else did.",
    category: "humor",
  },
  {
    id: 3,
    text: "A toad does not run in the daytime for nothing.",
    category: "life lessons",
  },
  {
    id: 4,
    text: "What an old man sees while sitting down, a young man cannot see even if he climbs a tree.",
    category: "wisdom",
  },
  {
    id: 5,
    text: "He who does not know one thing knows another.",
    category: "wisdom",
  },
  {
    id: 6,
    text: "A bird that flies off the earth and lands on an anthill is still on the ground.",
    category: "life lessons",
  },
  {
    id: 7,
    text: "If you want to go quickly, go alone. If you want to go far, go together.",
    category: "wisdom",
  },
  {
    id: 8,
    text: "A man who pays respect to the great paves the way for his own greatness.",
    category: "wisdom",
  },
  {
    id: 9,
    text: "The sun will shine on those who stand before it shines on those who kneel under them.",
    category: "wisdom",
  },
  {
    id: 10,
    text: "A single stick may smoke, but it will not burn.",
    category: "life lessons",
  },
  { id: 11, text: "A roaring lion kills no game.", category: "life lessons" },
  { id: 12, text: "A tree does not make a forest.", category: "wisdom" },
  {
    id: 13,
    text: "The best way to eat an elephant in your path is to cut it up into little pieces.",
    category: "life lessons",
  },
  {
    id: 14,
    text: "A man who uses force is afraid of reasoning.",
    category: "wisdom",
  },
  {
    id: 15,
    text: "The fool speaks, the wise man listens.",
    category: "wisdom",
  },
  {
    id: 16,
    text: "A person who forgets where they came from will not know where they are going.",
    category: "wisdom",
  },
  {
    id: 17,
    text: "The rain does not fall on one roof alone.",
    category: "wisdom",
  },
  {
    id: 18,
    text: "A snake that cannot shed its skin will perish.",
    category: "life lessons",
  },
  {
    id: 19,
    text: "The axe forgets, but the tree remembers.",
    category: "wisdom",
  },
  {
    id: 20,
    text: "A man who is trampled to death by an elephant is a man who was blind and deaf.",
    category: "life lessons",
  },
  {
    id: 21,
    text: "The moon moves slowly, but it crosses the town.",
    category: "wisdom",
  },
  {
    id: 22,
    text: "A single bracelet does not jingle.",
    category: "life lessons",
  },
  {
    id: 23,
    text: "The squirrel that works hard does not starve.",
    category: "life lessons",
  },
  {
    id: 24,
    text: "A man who is surrounded by problems should not add another to them.",
    category: "wisdom",
  },
  {
    id: 25,
    text: "The crab does not run away from the sea, but it knows where to hide.",
    category: "wisdom",
  },
  {
    id: 26,
    text: "A person who does not listen to advice will soon listen to lamentations.",
    category: "wisdom",
  },
  {
    id: 27,
    text: "The chicken that digs too deep will find a knife.",
    category: "life lessons",
  },
  {
    id: 28,
    text: "A man who does not know where the rain began to beat him cannot say where he dried his body.",
    category: "wisdom",
  },
  {
    id: 29,
    text: "The fish that escapes the net will still be caught by the hook.",
    category: "life lessons",
  },
  {
    id: 30,
    text: "A person who does not look ahead will soon be behind.",
    category: "wisdom",
  },
  {
    id: 31,
    text: "The tortoise that stretches its neck too far will soon lose its head.",
    category: "life lessons",
  },
  {
    id: 32,
    text: "A man who does not know how to dance will blame the drum.",
    category: "humor",
  },
  {
    id: 33,
    text: "The goat that eats yam peels will soon eat yam.",
    category: "life lessons",
  },
  {
    id: 34,
    text: "A person who does not know how to swim should not jump into the river.",
    category: "wisdom",
  },
  {
    id: 35,
    text: "The bird that flies too high will soon lose its way.",
    category: "life lessons",
  },
  {
    id: 36,
    text: "A man who does not know how to farm will blame the hoe.",
    category: "humor",
  },
  {
    id: 37,
    text: "The dog that barks too much will soon lose its voice.",
    category: "life lessons",
  },
  {
    id: 38,
    text: "A person who does not know how to cook will blame the pot.",
    category: "humor",
  },
  {
    id: 39,
    text: "The monkey that works hard will soon eat bananas.",
    category: "life lessons",
  },
  {
    id: 40,
    text: "A man who does not know how to fish will blame the net.",
    category: "humor",
  },
  {
    id: 41,
    text: "The bird that sings too much will soon lose its song.",
    category: "life lessons",
  },
  {
    id: 42,
    text: "A person who does not know how to weave will blame the loom.",
    category: "humor",
  },
  {
    id: 43,
    text: "The cow that grazes too far will soon lose its way.",
    category: "life lessons",
  },
  {
    id: 44,
    text: "A man who does not know how to hunt will blame the bow.",
    category: "humor",
  },
  {
    id: 45,
    text: "The snake that bites its own tail will soon die.",
    category: "life lessons",
  },
  {
    id: 46,
    text: "A person who does not know how to sew will blame the needle.",
    category: "humor",
  },
  {
    id: 47,
    text: "The bird that flies too low will soon be caught by the cat.",
    category: "life lessons",
  },
  {
    id: 48,
    text: "A man who does not know how to carve will blame the wood.",
    category: "humor",
  },
  {
    id: 49,
    text: "The fish that swims too deep will soon be caught by the net.",
    category: "life lessons",
  },
  {
    id: 50,
    text: "A person who does not know how to paint will blame the brush.",
    category: "humor",
  },
  {
    id: 51,
    text: "Idan kura ta ce za ta yi gudu, natafa natafa ne.",
    category: "Hausa",
  },
  {
    id: 52,
    text: "Bí òjé bá mọ ìrìn, ó ní òkè lókè ń rẹ̀.",
    category: "Yoruba",
  },
  {
    id: 53,
    text: "A na-eyi nwa oké akụ, ọ bụrụ na ọ nweghị isi, ọ sị na ọnụ ụzọ ejighi mma.",
    category: "Igbo",
  },
  {
    id: 54,
    text: "Kifi ba ta iya iyo, ta ce ruwa ne matsala.",
    category: "Hausa",
  },
  {
    id: 55,
    text: "Ìkànsí kì í jé kó mọ ìdí adídùn.",
    category: "Yoruba",
  },
  {
    id: 56,
    text: "Ọtụtụ aka na-eme ka nri sie ngwa ngwa.",
    category: "Igbo",
  },
  {
    id: 57,
    text: "Wanda bai iya dinki ba, zai ce allura ba ta da kyau.",
    category: "Hausa",
  },
  {
    id: 58,
    text: "Ẹja tí kò bá mọ̀ bí a ṣe ń ṣèrè, ó ní omi kún tó.",
    category: "Yoruba",
  },
  {
    id: 59,
    text: "Onye na-enweghị nka, na-ekwusi osisi ike.",
    category: "Igbo",
  },
  {
    id: 60,
    text: "Baƙo da bai iya girki ba, zai ce tukunya ba ta da kyau.",
    category: "Hausa",
  },
  {
    id: 61,
    text: "Agbára tí kò mọ iṣẹ́ ọnà, ó ní brọshì ni kùsì.",
    category: "Yoruba",
  },
  {
    id: 62,
    text: "Onye na-enweghị aka, na-ekwusi mma ike.",
    category: "Igbo",
  },
];

export default function Home() {
  const [proverb, setProverb] = useState(proverbs[0]);
  const [category, setCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const addToFavorites = () => {
    if (!favorites.includes(proverb)) {
      setFavorites([...favorites, proverb]);
      alert("Added to favorites!");
    }
  };

  const generateProverb = () => {
    const filtered =
      category === "all"
        ? proverbs
        : proverbs.filter((p) => p.category === category);
    const randomIndex = Math.floor(Math.random() * filtered.length);
    setProverb(filtered[randomIndex]);
  };

  const shareProverb = () => {
    const text = `Check out this Nigerian proverb: "${proverb.text}"`;
    const url = window.location.href;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const toggleMusic = () => {
    const audio = document.querySelector("audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={`min-h-screen p-4 flex flex-col items-center justify-center ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <audio autoPlay loop>
        <source src="/folklore.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 p-3 rounded-full ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        } hover:bg-opacity-80 transition-all duration-300`}
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" size={20} />
        ) : (
          <FaMoon className="text-gray-700" size={20} />
        )}
      </button>

      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6 font-playfair">
          Nigerian Proverb Generator
        </h1>

        <div
          className={`bg-white p-8 rounded-2xl shadow-2xl ${
            darkMode ? "bg-opacity-10" : "bg-opacity-90"
          } backdrop-blur-sm transition-all duration-300`}
        >
          <p className="text-2xl italic text-center mb-6 font-dancing">
            "{proverb.text}"
          </p>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`w-full p-3 mb-6 rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300 text-gray-900"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
          >
            <option value="all">All Categories</option>
            <option value="wisdom">Wisdom</option>
            <option value="humor">Humor</option>
            <option value="life lessons">Life Lessons</option>
            <option value="Hausa">Hausa</option>
            <option value="Yoruba">Yoruba</option>
            <option value="Igbo">Igbo</option>
          </select>

          <button
            onClick={generateProverb}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
          >
            Generate Proverb
          </button>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={addToFavorites}
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-all duration-300 flex items-center gap-2"
          >
            <FaHeart /> Add to Favorites
          </button>
          <button
            onClick={shareProverb}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300 flex items-center gap-2"
          >
            <FaShareAlt /> Share
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={toggleMusic}
            className="mt-6 p-3 text-lg bg-pink-600 text-white rounded-lg cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
        </div>

        {favorites.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
            <ul className="space-y-4">
              {favorites.map((fav, index) => (
                <li
                  key={index}
                  className={`p-4 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-md`}
                >
                  <p className="text-xl italic">"{fav.text}"</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
