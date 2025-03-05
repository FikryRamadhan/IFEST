import { IconChevronCompactDown, IconMenu, IconMessage2Filled, IconSend } from "@tabler/icons-react";
import { useState } from "react";
import ChatbotAction from "./ChatBotForm";

export default function ChatbotButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="pt-5">
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-3 left-5 bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-lg"
            >
                {isOpen ? <IconChevronCompactDown size={30} /> : <IconMessage2Filled size={30} />}
            </button>

            {/* Chatbot Modal */}
            {isOpen && (
                <ChatbotAction />
            )}
        </div>
    );
}
