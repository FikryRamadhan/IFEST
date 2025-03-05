import { IconMenu, IconSend } from '@tabler/icons-react'
import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import LoadingIndicator from './LoadingIndicator';

function getDefaultProfileImage(email: string): string {
    if (!email) return "";

    const initials = email.split("@")[0].slice(0, 2).toUpperCase();
    return `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff&size=128`;
}

const ChatbotAction = () => {

    const initialMessages = [
        {
            text: "Halo! Saya ALOPE chatbot, ada yang bisa saya bantu?",
            sender: "bot",
        },
    ];

    const [messages, setMessages] = useState(initialMessages);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const allowedKeywords = [
        "pengertian dan informasi seputar pakaian hingga cara pembuatannya",
        "pengelolaan sampah dari pakaian bekas",
        "cara membuat pakaian dari daur ulang pakaian bekas",
        "cara agar pakaian bekas bisa didaur ulang jadi pakaian baru",
        "cara agar meminimalisir kan beli barang baru",
        "kalimat sapaan seperti halo dan hai",
        "dampak industri fashion terhadap lingkungan",
        "konsep fashion berkelanjutan dan pakaian ramah lingkungan",
        "apa itu Second Soul dan tujuannya",
        "bagaimana Second Soul mendaur ulang pakaian bekas",
        "mengapa pakaian ramah lingkungan penting",
        "cara mengurangi limbah tekstil",
        "cara menghemat sumber daya alam dalam industri fashion",
        "cara mengurangi polusi air dan udara dari produksi pakaian",
        "keuntungan pakaian ramah lingkungan bagi kesehatan",
        "perekonomian sirkular dan dampaknya dalam industri fashion",
        "proses pembuatan pakaian daur ulang oleh Second Soul",
        "tahapan dalam pengolahan pakaian bekas menjadi produk baru",
        "penggunaan bahan alami dan pewarna alami dalam fashion",
        "kemasan ramah lingkungan dalam industri pakaian",
        "dampak positif Second Soul terhadap lingkungan dan masyarakat",
        "cara meningkatkan kesadaran tentang fashion berkelanjutan",
        "peran desainer dan pengrajin dalam upcycling pakaian",
        "strategi mengurangi konsumsi fast fashion",
        "bagaimana mendukung fashion etis dan berkelanjutan",
        "kalimat sapaan seperti halo dan hai",
        "keren"
    ];
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Fungsi untuk menangani pengiriman pesan
    const handleSendMessage = async() => {
        if (!userInput.trim()) return;
        setIsLoading(true);

        const userText = userInput.trim();
        setMessages([...messages, { text: userText, sender: "user" }]);
        setUserInput("");

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const prompt = `Kamu hanya boleh menjawab jika pertanyaan mengandung salah satu dari keyword berikut: ${allowedKeywords.join(", ")}
        Jika pertanyaan tidak relevan dengan keyword tersebut, jawab: "Saya hanya dapat menjawab pertanyaan terkait dengan topik yang ditentukan. seperti pakaian dan web kita"
        
        Pertanyaan: ${userText}
      `;

            const result = await model.generateContent(prompt);
            const botResponse = await result.response.text();

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botResponse, sender: "bot" },
            ]);
        } catch (error) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Terjadi kesalahan, coba lagi nanti.", sender: "bot" },
            ]);
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Fungsi untuk reset chat
    const handleResetChat = () => {
        setMessages(initialMessages); // Mengembalikan ke pesan awal
        setMenuOpen(false); // Menutup menu setelah reset
    };

    return (
        <>
            <div className="fixed top-27 left-5 bottom-5 max-sm:left-8 lg:bottom-16 right-5 w-90 lg:w-100 h-[calc(80%-40px)] bg-white rounded-lg shadow-xl border border-gray-300 flex flex-col">
                <div className="flex justify-between items-center  p-3 border-b border-gray-300 bg-gray-100">
                    <h2 className="text-md font-semibold">Second Bot</h2>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-500 hover:text-gray-700">
                        <IconMenu size={20} />
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-30 w-32 bg-white border rounded shadow-lg">
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={handleResetChat}>Reset Chat</button>
                        </div>
                    )}
                </div>
                <div className="p-4 flex-1 overflow-y-auto flex flex-col gap-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex items-start gap-2 ${message.sender === "user" ? "justify-end" : ""}`}>
                            {message.sender === "bot" && (
                                <img src={getDefaultProfileImage("bot@alope.id")} alt="Bot Profile" className="w-8 h-8 rounded-full" />
                            )}
                            <div className={`${message.sender === "user" ? "bg-black text-white" : "bg-gray-200 text-gray-800"} p-2 rounded-lg max-w-[75%]`}>
                                {message.text}
                            </div>
                            {message.sender === "user" && (
                                <img src={getDefaultProfileImage("user@gmail.com")} alt="User Profile" className="w-8 h-8 rounded-full" />
                            )}
                        </div>
                    ))}
                    {isLoading && <LoadingIndicator />}
                </div>
                <div className="border-t border-gray-300 bg-gray-100 p-2 flex items-center">
                    <input
                        type="text"
                        placeholder="Masukkan masalah anda disini"
                        className="flex-1 p-2 text-sm border rounded-md outline-none"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button className="ml-2 p-2 text-gray-600 hover:text-gray-800" onClick={handleSendMessage}>
                        <IconSend size={20} />
                    </button>
                </div>
                <div className="text-xs text-gray-500 text-center py-2 border-t border-gray-300">
                    Powered by <a href="https://alope.id" className="text-black">Alope World</a> | Second Soul
                </div>
            </div>
        </>
    )
}

export default ChatbotAction